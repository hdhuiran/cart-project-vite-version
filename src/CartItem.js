export default class CartItem {
  constructor(goodsData) {
    this.data = goodsData;
    this.choose = 0;
  }
  getTotalPrice() {
    return this.data.price * this.choose;
  }
  increase() {
    this.choose++;
  }
  decrease() {
    this.choose--;
  }
}
