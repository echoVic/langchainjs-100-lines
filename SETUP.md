# 🚀 快速设置指南

## 第一步：配置环境变量

1. **复制环境变量模板**
   ```bash
   cp .env.example .env
   ```

2. **获取 OpenAI API Key**
   - 访问 [OpenAI API Keys](https://platform.openai.com/api-keys)
   - 创建新的 API Key
   - 复制到 `.env` 文件中的 `OPENAI_API_KEY`

3. **验证设置**
   ```bash
   pnpm run check-setup
   ```

## 第二步：运行第一个示例

```bash
# 测试第一个示例
pnpm run dev:01

# 如果成功，你会看到 AI 的回复！
```

## 常见问题

### ❌ "OpenAI API Key not found"
- 确保 `.env` 文件存在
- 确保 `OPENAI_API_KEY` 已设置为有效的密钥
- 运行 `pnpm run check-setup` 检查配置

### ❌ "Module not found"
- 运行 `pnpm install` 安装依赖

### ❌ 网络问题
- 检查网络连接
- 如果使用代理，配置环境变量：
  ```bash
  export HTTP_PROXY=http://your-proxy:port
  export HTTPS_PROXY=http://your-proxy:port
  ```

## 支持的模型提供商

除了 OpenAI，我们还支持：

- **Anthropic (Claude)**: 设置 `ANTHROPIC_API_KEY`
- **Google (Gemini)**: 设置 `GOOGLE_API_KEY`
- **Cohere**: 设置 `COHERE_API_KEY`

## 获取帮助

1. 查看 [README.md](./README.md)
2. 运行 `pnpm run check-setup` 诊断问题
3. 检查每个示例的 README 获取具体指导