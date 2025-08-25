# 模块化购物车项目 (Vite + Node.js + Express)

这是一个用于学习目的的**前后端分离**项目，旨在演示如何将一个现代化的前端应用，与一个简单的后端服务器进行集成。

### 项目特点

- **前端 (`cart-project-vite-version`)**：
  - 由 **Vite** 驱动的现代化开发环境。
  - 代码遵循模块化架构 (`CartItem`, `ShoppingCart`, `CartView`)。
  - 页面加载时，自动通过 **GET** 请求向后端获取商品列表。
  - 提供表单，通过 **POST** 请求向后端添加新商品。
- **后端 (`my-first-server`)**：
  - 使用 **Node.js** 和 **Express** 搭建的轻量级后端服务器。
  - 提供了 `/goods` 的 **GET** 和 **POST** 路由。
  - 成功解决了前后端通信中的 **CORS 跨域**问题。

### 如何运行

要运行这个项目，你需要同时启动前端和后端两个服务。

#### 1. 启动后端服务器

- 进入 `my-first-server` 文件夹：
  ```bash
  cd my-first-server
  ```
- 安装依赖：
  ```bash
  npm install
  ```
- 启动服务器：
  ```bash
  node index.js
  ```
  _服务器将运行在 `http://localhost:3000`_

#### 2. 启动前端项目

- 打开一个新的终端，进入 `cart-project-vite-version` 文件夹：
  ```bash
  cd ../cart-project-vite-version
  ```
- 安装依赖：
  ```bash
  npm install
  ```
- 启动前端开发服务器：
  ```bash
  npm run dev
  ```
  _前端页面将运行在 `http://localhost:5173`_

完成之后，请确保你的**两个终端都正在运行**，然后打开浏览器，访问 `http://localhost:5173` 就可以看到你的作品了。

这份说明书，既是你努力学习的见证，也能帮助任何对你的项目感兴趣的人快速上手。

现在，你只需要把这个新的 `README.md` 文件，上传到你的 `my-first-server` 仓库里，然后我们就可以分别把这两个项目部署到 Vercel 上了。
