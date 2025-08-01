FROM node:18-alpine

WORKDIR /workspace

# 安装 pnpm
RUN npm install -g pnpm

# 复制依赖文件
COPY package.json pnpm-lock.yaml ./

# 安装依赖
RUN pnpm install

# 复制源码
COPY . .

# 暴露端口
EXPOSE 3000 3001

# 启动命令
CMD ["pnpm", "run", "browser:01"]