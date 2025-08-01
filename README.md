# LangChain.js 100 行代码示例

> 🚀 通过 10 个简洁实用的示例，快速掌握 LangChain.js 核心概念

## 📋 项目介绍

这是一个专为学习 LangChain.js 设计的教程项目，每个示例都控制在 **100 行代码以内**，聚焦核心概念，避免复杂实现，让你快速上手 AI 应用开发。

## 🎯 学习目标

- ✅ 理解 LangChain.js 的核心概念和工作流程
- ✅ 掌握 LCEL (LangChain Expression Language) 的链式编程
- ✅ 学会构建具有记忆功能的对话系统
- ✅ 实现 RAG (检索增强生成) 应用
- ✅ 创建能使用工具的智能代理
- ✅ 将 AI 应用部署为 Web 服务
- ✅ 使用 LangSmith 进行应用监控和调试

## 🛠️ 技术栈

- **LangChain.js** - AI 应用框架
- **TypeScript** - 类型安全的开发体验
- **Node.js 18+** - 现代 JavaScript 运行时
- **OpenAI API** - GPT 模型调用
- **pnpm** - 高效的包管理器

## 🚀 快速开始

### 🌐 在线体验（无需安装）

| 方式 | 链接 | 说明 |
|---|---|---|
| **CodeSandbox** | [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/p/github/echoVic/langchainjs-100-lines/main?import=true) | 一键在线运行 |
| **浏览器演示** | [Live Demo](examples/01-hello/browser-demo.html) | 本地浏览器直接运行 |

### 💻 本地开发

#### 1. 安装依赖

```bash
pnpm install
```

#### 2. 配置环境变量

```bash
# 复制环境变量模板
cp .env.example .env

# 编辑 .env 文件，填入你的 API Key
# 详细配置指南：查看 SETUP.md
```

#### 3. 验证设置

```bash
# 检查项目配置
pnpm run check-setup
```

#### 4. 运行示例

每个示例都可以独立运行：

```bash
# 运行特定示例
pnpm run dev:01  # 运行第1个示例
pnpm run dev:02  # 运行第2个示例
# ...以此类推

# 启动浏览器演示
pnpm run browser:01
# 自动选择可用端口，访问显示的URL
```

### 📚 详细指南
- [CodeSandbox使用指南](CODESANDBOX.md) - 在线环境完整教程

### 🔧 遇到问题？

- 查看 [SETUP.md](./SETUP.md) 获取详细配置指南
- 运行 `pnpm run check-setup` 诊断问题
- 检查每个示例的 README 获取具体指导

## 📚 示例目录

| 编号 | 示例 | 核心概念 | 运行命令 |
|------|------|----------|----------|
| [01](examples/01-hello) | 你好，LangChain.js！ | ChatOpenAI 基础用法 | `pnpm run dev:01` |

## 🔧 开发环境

### 系统要求
- Node.js 18.0.0 或更高版本
- pnpm 包管理器
- OpenAI API Key

### 安装 pnpm
```bash
npm install -g pnpm
```

### 获取 OpenAI API Key
1. 访问 [OpenAI Platform](https://platform.openai.com/api-keys)
2. 创建新的 API Key
3. 在 `.env` 文件中配置：
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

## 📊 项目结构

```
langchainjs-100-lines/
├── README.md              # 项目说明文档
├── package.json           # 依赖和脚本配置
├── tsconfig.json          # TypeScript 配置
├── .env.example          # 环境变量模板
├── .github/workflows/    # CI/CD 配置
├── examples/             # 10个独立示例
│   ├── 01-hello/        # 基础示例
│   ├── 02-lcel-pipe/    # 链式调用
│   ├── ...              # 其他示例
│   └── 10-langsmith/    # 监控追踪
└── src/utils/            # 共用工具函数
```

## 🌟 进阶学习

### 官方资源
- [LangChain.js 官方文档](https://js.langchain.com/docs/)
- [LangSmith 平台](https://smith.langchain.com/)
- [LangChain 博客](https://blog.langchain.dev/)

### 社区资源
- [GitHub Discussions](https://github.com/langchain-ai/langchainjs/discussions)
- [Discord 社区](https://discord.gg/langchain)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/langchain)

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 开发流程
1. Fork 本项目
2. 创建功能分支：`git checkout -b feature/new-example`
3. 提交更改：`git commit -m 'Add new example'`
4. 推送分支：`git push origin feature/new-example`
5. 创建 Pull Request

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙋‍♂️ 问题反馈

- 提交 Issue：[GitHub Issues](https://github.com/your-username/langchainjs-100-lines/issues)
- 联系维护者：your-email@example.com

---

<div align="center">
  <p>⭐ 如果这个项目对你有帮助，请给个 Star！</p>
  <p><strong>Happy Coding with LangChain.js! 🎉</strong></p>
</div>