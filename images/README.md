# 华语女性创作歌手档案馆

这是一个适合编程新手阅读的纯静态网站，没有框架，也不需要安装依赖。

## 项目文件

- `index.html`：首页，展示网站主题和三位焦点歌手。
- `singers.html`：歌手列表页，支持按姓名、别名和风格搜索。
- `singer.html`：歌手详情页，通过网址中的 `?id=` 显示不同歌手。
- `data.js`：网站资料。内容根据飞书多维表格整理。
- `app.js`：把 `data.js` 中的资料放到页面，并处理搜索与详情页切换。
- `styles.css`：控制网站的排版、颜色、响应式布局和杂志风格。
- `vercel.json`：告诉 Vercel 这是一个静态网站。

## 在本地查看

进入 `website` 文件夹，然后运行：

```powershell
python -m http.server 8000
```

浏览器打开：

```text
http://localhost:8000
```

也可以直接双击 `index.html`，但使用本地服务器更接近正式部署效果。

## 修改数据

打开 `data.js`，每位歌手都是一个 JavaScript 对象。复制一个对象并修改内容，就能添加新歌手。

`id` 必须保持唯一，并建议只使用英文小写字母、数字和连字符。

## 部署到 Vercel

1. 注册并登录 [Vercel](https://vercel.com/)。
2. 把这个项目上传到 GitHub。
3. 在 Vercel 点击 **Add New → Project**，导入 GitHub 仓库。
4. 将 **Root Directory** 设置为 `website`。
5. Framework Preset 选择 **Other**。
6. 不填写 Build Command，点击 **Deploy**。

部署完成后，Vercel 会提供一个可以公开访问的网址。
