# 🚀 GitHub Pages 部署指南

## 一键部署你的 LangChain.js Demo

### 📋 自动部署配置

我们已经为你配置好了 GitHub Actions，只需要简单的几步就能让你的 demo 在线可访问。

### 🔧 步骤1：启用 GitHub Pages

1. 打开你的 GitHub 仓库：`https://github.com/your-username/langchainjs-100-lines`
2. 点击 **Settings** → **Pages**（在左侧菜单）
3. 在 **Source** 下拉菜单中选择 **GitHub Actions**
4. 保存设置

### 🚀 步骤2：推送代码触发部署

```bash
# 添加并提交配置文件
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 🎯 访问你的在线 Demo

部署完成后，你可以通过以下链接访问：

- **主页面：** `https://your-username.github.io/langchainjs-100-lines/`
- **浏览器 Demo：** `https://your-username.github.io/langchainjs-100-lines/examples/01-hello/browser-demo.html`

### 📱 快速访问示例

部署成功后，你的用户可以直接通过以下方式体验：

1. **无需安装**：直接在浏览器中运行
2. **免费API**：使用 OpenRouter 提供的免费 API Key
3. **移动端友好**：支持手机和平板访问
4. **即时预览**：修改代码后立即看到效果

### 🔄 自动更新

每次你推送代码到 `main` 分支时，GitHub Actions 会自动：
- 构建最新的 demo
- 部署到 GitHub Pages
- 更新在线版本

### 💡 自定义域名（可选）

如果你想使用自定义域名：

1. 在仓库根目录创建 `CNAME` 文件
2. 在文件中写入你的域名，例如：`langchain-demo.yourdomain.com`
3. 在你的域名 DNS 设置中添加 CNAME 记录指向 `your-username.github.io`

### 🔍 检查部署状态

1. 在 GitHub 仓库中点击 **Actions** 标签
2. 查看最新的部署工作流运行状态
3. 如果显示绿色 ✅，说明部署成功

### 📊 部署结构

```
your-username.github.io/langchainjs-100-lines/
├── index.html              # 主页面，包含所有示例链接
├── examples/
│   └── 01-hello/
│       └── browser-demo.html  # 浏览器版demo
└── ...
```

### 🎉 分享你的 Demo

部署成功后，你可以：
- 在社交媒体上分享链接
- 在 README 中添加在线体验按钮
- 在公众号文章中嵌入体验链接

### 📞 故障排除

如果部署遇到问题：

1. 检查 **Actions** 标签中的错误日志
2. 确保仓库设置为公开（私有仓库需要付费的 GitHub Pages）
3. 确认 `.github/workflows/` 目录中的文件已正确提交

### 🎯 下一步

部署成功后，建议：
1. 在 README 顶部添加在线体验按钮
2. 更新公众号文章的体验链接
3. 收集用户反馈，持续优化体验