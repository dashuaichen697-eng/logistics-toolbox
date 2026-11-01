# 物流文档工具箱

纯前端网页工具，文件只在浏览器本地处理，不上传服务器、不保存任何数据。

- **箱唛自动生成器**（`#/carton-mark`）：上传 Excel，确认/编辑识别结果后生成每箱一页的 Word 箱唛，多文件打包 ZIP。
- **发票转装箱单**（`#/packing-list`）：上传巴西海运发票 Excel，生成海运装箱单（含产品图片、体积公式）。

## 本地运行

```bash
npm install
npm run dev
npm test
npm run lint
npm run build:pages   # GitHub Pages 构建，输出 dist/
```

部署：`dist/` 的内容发布到本仓库的 `gh-pages` 分支，GitHub Pages 从该分支提供页面。

注意：这是公开仓库，不要提交任何客户发票、运单号、价格或其他业务数据；测试只用虚构数据。
