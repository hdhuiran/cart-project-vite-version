import ShoppingCart from "./ShoppingCart.js";
import CartView from "./CartView.js";

// ===================================
// “总装工厂”：负责初始化
// ===================================
async function main() {
  try {
    // 1. 去我们自己的“后厨” (http://localhost:3000)“进货”
    // 注意：我们把后厨的 GET 路径改成了 /goods
    const response = await fetch("http://localhost:3000/goods"); // <-- GET 请求就在这里！
    const goods = await response.json();

    // 2. 用“进货”来的原材料，创建“总管家”和“店面经理”
    const cart = new ShoppingCart(goods);
    const view = new CartView(cart);
  } catch (error) {
    console.error("加载商品数据失败:", error);
    document.body.innerHTML = "抱歉，商店加载失败，请稍后再试。";
  }
}

// 启动我们的初始化程序
main();

// ===================================
// “下订单”的逻辑
// ===================================

const titleInput = document.getElementById("good-title");
const priceInput = document.getElementById("good-price");
const addBtn = document.getElementById("add-good-btn");

addBtn.addEventListener("click", async () => {
  const title = titleInput.value;
  const price = +priceInput.value;

  if (!title || !price) {
    alert("请输入商品名称和价格！");
    return;
  }

  try {
    // 使用 fetch 发送 POST 请求到我们自己的后厨
    const response = await fetch("http://localhost:3000/goods", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, price: price }),
    });

    const result = await response.text();
    console.log("服务器回复:", result);
    alert(result);

    titleInput.value = "";
    priceInput.value = "";
  } catch (error) {
    console.error("添加商品失败:", error);
    alert("添加商品失败，请查看控制台。");
  }
});
