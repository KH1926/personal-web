# Personal Web

中文优先的个人学术简历网站，使用 Astro 构建，并通过 GitHub Actions 部署到 GitHub Pages。

## Development

```powershell
nvm use 22.22.3 64
npm install
npm run check
npm run build
npm run dev -- --host 127.0.0.1
```

## Content

所有可替换的个人信息、教育经历、项目、技能和成果数据都集中在：

```text
src/data/profile.ts
```

## Deployment

默认部署到 GitHub Pages project site：

```text
https://<github-username>.github.io/personal-web/
```

构建命令：

```powershell
npm run build
```

输出目录：

```text
dist
```
