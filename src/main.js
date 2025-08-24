// 1. 从 "src" 文件夹里，导入所有需要的“零件”和“原材料”
import ShoppingCart from "./ShoppingCart.js";
import CartView from "./CartView.js";
import { goods } from "./data.js"; // 注意：data.js 里要用 export const goods

// ===================================
// “总装工厂”：程序的入口
// ===================================

// 2. 创建一个“总管家”实例，并把原始商品数据(goods)传给它
const cart = new ShoppingCart(goods);

// 3. 创建一个“店面经理”实例，并把“总管家”(cart)传给它
//    (CartView 的 constructor 会自动调用 init 方法，启动整个应用)
const view = new CartView(cart);
