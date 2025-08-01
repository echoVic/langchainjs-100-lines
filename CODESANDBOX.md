# CodeSandbox 快速入门指南

## 🚀 在线体验LangChain.js

### 方式一：一键导入（推荐）
[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/p/github/echoVic/langchainjs-100-lines/main?import=true)

**步骤：**
1. 点击上方按钮
2. 等待环境自动配置（约30秒）
3. 在浏览器中直接运行代码

### 方式二：手动创建
1. 访问 [codesandbox.io](https://codesandbox.io)
2. 选择 "Import from GitHub"
3. 输入仓库地址：`echoVic/langchainjs-100-lines`
4. 点击 "Create Sandbox"

## 🔧 在CodeSandbox中使用

### 获取API密钥
在CodeSandbox中，你需要设置环境变量：

```bash
# 打开终端（Terminal）
echo "OPENAI_API_KEY=你的密钥" > .env
echo "OPENAI_API_BASE=https://api.openai.com/v1" >> .env
```

### 运行演示
```bash
# 方法1：命令行演示
pnpm dev:01

# 方法2：浏览器演示
pnpm run browser:01
```

### 端口说明
- **3000端口**：浏览器演示（自动打开）
- **终端输出**：查看实时日志

## 🎯 快速开始

1. **打开CodeSandbox**：[点击这里](https://codesandbox.io/p/github/echoVic/langchainjs-100-lines/main?import=true)
2. **设置API密钥**：在终端中运行上面提供的命令
3. **开始体验**：浏览器会自动打开演示页面

## 📱 移动端支持

CodeSandbox支持在移动设备上运行，你可以：
- 在手机浏览器中直接打开
- 使用iPad进行代码编辑
- 通过分享链接给他人体验

## 🔄 同步更新

由于CodeSandbox直接基于GitHub仓库，任何仓库更新都会自动同步到CodeSandbox中。

## 💡 提示

- **免费额度**：CodeSandbox提供免费额度，适合学习和测试
- **保存工作**：登录后可保存你的修改
- **分享**：可以生成分享链接给他人
- **导出**：随时导出到本地继续开发