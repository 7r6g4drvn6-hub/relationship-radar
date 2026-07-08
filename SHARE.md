# 发给别人使用

这个小程序是纯前端版本，不需要账号，也不会上传数据。别人收到后可以用下面任意一种方式打开。

## 方式一：直接发送压缩包

把 `relationship-radar-share.zip` 发给对方。对方解压后打开 `relationship-radar/index.html` 即可使用。

如果浏览器直接打开后不保存数据，可以用方式二。

## 方式二：本地运行

对方解压后进入 `relationship-radar` 文件夹，运行：

```bash
python3 -m http.server 8123
```

然后打开：

```text
http://127.0.0.1:8123/
```

## 方式三：变成公开链接

把 `relationship-radar` 文件夹上传到任意静态网页托管平台，比如 GitHub Pages、Netlify、Vercel 或 Cloudflare Pages。入口文件是 `index.html`。

## 隐私说明

所有填写内容只保存在使用者自己的浏览器本地存储里，不会上传到服务器。
