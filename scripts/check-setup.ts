#!/usr/bin/env node

import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

interface CheckResult {
  name: string;
  status: "✅" | "❌" | "⚠️";
  message: string;
}

function checkEnvFile(): CheckResult {
  const envPath = path.join(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) {
    return {
      name: ".env 文件",
      status: "❌",
      message: ".env 文件不存在，请复制 .env.example 为 .env 并填写配置",
    };
  }
  return {
    name: ".env 文件",
    status: "✅",
    message: ".env 文件已存在",
  };
}

function checkApiKey(): CheckResult {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      name: "OpenAI API Key",
      status: "❌",
      message: "OPENAI_API_KEY 未设置，请在 .env 文件中添加",
    };
  }
  if (apiKey === "your_openai_api_key_here" || apiKey.length < 20) {
    return {
      name: "OpenAI API Key",
      status: "⚠️",
      message: "OPENAI_API_KEY 看起来是默认值，请替换为真实的 API 密钥",
    };
  }
  return {
    name: "OpenAI API Key",
    status: "✅",
    message: "OPENAI_API_KEY 已正确设置",
  };
}

function checkDependencies(): CheckResult {
  const nodeModulesPath = path.join(process.cwd(), "node_modules");
  if (!fs.existsSync(nodeModulesPath)) {
    return {
      name: "依赖安装",
      status: "❌",
      message: "node_modules 不存在，请运行: pnpm install",
    };
  }
  return {
    name: "依赖安装",
    status: "✅",
    message: "依赖已安装",
  };
}

async function main() {
  console.log("🔍 检查 LangChain.js 100 行项目设置\n");

  const checks: CheckResult[] = [
    checkEnvFile(),
    checkApiKey(),
    checkDependencies(),
  ];

  checks.forEach((check) => {
    console.log(`${check.status} ${check.name}: ${check.message}`);
  });

  console.log("\n📋 下一步操作:");
  console.log("1. 确保所有项目都显示 ✅");
  console.log("2. 运行: pnpm run dev:01 测试第一个示例");
  console.log("3. 查看 README.md 获取详细说明");
}

main().catch(console.error);