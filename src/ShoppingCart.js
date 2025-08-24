import CartItem from "./CartItem.js";
export default class ShoppingCart {
  constructor(goodsList) {
    const CartItems = [];
    for (let i = 0; i < goodsList.length; i++) {
      const itemData = goodsList[i];

      const cartItem = new CartItem(itemData);

      CartItems.push(cartItem);
    }
    this.items = CartItems;
    this.deliveryThreshold = 30; // 假设起送价是30元
    this.deliveryPrice = 5; // 假设配送费是5元
  }
  getTotalPrice() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i].getTotalPrice();
    }
    return sum;
  }
  getTotalCount() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i].choose; // 直接累加每个商品的 choose 数量
    }
    return sum;
  }
  hasMetDeliveryThreshold() {
    return this.getTotalPrice() >= this.deliveryThreshold;
  }
  increase(index) {
    this.items[index].increase();
  }
  decrease(index) {
    this.items[index].decrease();
  }
}
