import ShoppingCart from "./ShoppingCart.js";
export default class CartView {
  constructor(shoppingCart) {
    this.cart = shoppingCart;
    this.doms = {
      goodsContainer: document.querySelector(".goods-list"),
      totalPrice: document.querySelector(".total-price"),
      totalCount: document.querySelector(".total-count"),
    };
    this.init();
  }

  init() {
    // 渲染商品
    this.renderGoodsList();
    this.bindEvents();
  }
  // 一个专门负责“画画”的方法
  renderGoodsList() {
    let html = "";
    const items = this.cart.items; // 向“总管家”要来“员工名单”

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      // 注意：我们在按钮上，用 data-index 属性存好了每个商品的“工号”(索引)
      html += `
                <div class="goods-item">
                    <h3>${item.data.title}</h3>
                    <p>价格: ¥${item.data.price}</p>
                    <div class="buttons">
                        <button data-index="${i}" class="decrease">-</button>
                        <span>${item.choose}</span>
                        <button data-index="${i}" class="increase">+</button>
                    </div>
                </div>
            `;
    }
    this.doms.goodsContainer.innerHTML = html;
  }
  bindEvents() {
    // 我们把监听器绑定在整个“货架”上，而不是每个按钮上，这更高效！
    this.doms.goodsContainer.addEventListener("click", (e) => {
      // e.target 就是用户实际点击的那个元素

      console.log("按钮被点击了!", e.target);
      if (e.target.classList.contains("increase")) {
        // 如果点击的是“+”号按钮
        const index = +e.target.dataset.index; // 从按钮上拿到“工号”
        this.cart.increase(index); // 向“总管家”汇报：“给这个工号的员工数量+1”

        this.updateGoodsItem(index); // 2. 命令“商品专员”去更新单个商品
        this.updateFooter(); // 3. 命令“页脚专员”去更新底部
      } else if (e.target.classList.contains("decrease")) {
        // 如果点击的是“-”号按钮
        const index = +e.target.dataset.index; // 从按钮上拿到“工号”
        this.cart.decrease(index); // 向“总管家”汇报：“给这个工号的员工数量-1”
        this.updateGoodsItem(index); // 2. 更新单个商品
        this.updateFooter(); // 3. 更新底部
      }
    });
  }
  updateGoodsItem(index) {
    const itemDiv = this.doms.goodsContainer.children[index];
    const countSpan = itemDiv.querySelector(".buttons span");
    countSpan.textContent = this.cart.items[index].choose;
  }
  updateFooter() {
    // 向“总管家”要来最新的总价和总数
    const totalPrice = this.cart.getTotalPrice();
    const totalCount = this.cart.getTotalCount();

    // 更新页面上的显示
    this.doms.totalPrice.textContent = `¥${totalPrice.toFixed(2)}`;
    this.doms.totalCount.textContent = totalCount;
  }
}
