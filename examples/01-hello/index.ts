#!/usr/bin/env node

import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

// 极简 Hello LLM - 从环境变量读取配置
const llm = new ChatOpenAI({
  model: "openai/gpt-3.5-turbo",
  temperature: 0.7,
  configuration: {
    baseURL: process.env.OPENAI_API_BASE || "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
  },
});

const response = await llm.invoke("用一句话介绍 LangChain.js");
console.log(response.content);