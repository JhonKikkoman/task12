import Buyable from "./buyable";
export default class Cart {
    public items: Buyable[] = [
        {
            id: 4,
            name: "Avengers",
            price: 300,

        },
        {
            id: 6,
            name: "Avengers-LastStand",
            price: 500,

        }
    ];
    sum: number = 0;
    // add(item: Buyable): void {
    //     this.items.push(item);
    // }
    totalSum(): number {
        for (let item of this.items) {
            if (Object.hasOwn(item,'price')) {
                this.sum += item.price;
            }
        }
        return this.sum;
    }
    sumWithDiscount(discount: number): number {
        for (let item of this.items) {
            if (Object.hasOwn(item,'price')) {
                this.sum += item.price;
            }
        }
        return this.sum = this.sum - this.sum * (discount / 100);
    }
    deleteFromCart(id: number): void {
        this.items.forEach((elem) => {
            if(elem.id === id) {
                this.items.splice(this.items.indexOf(elem), 1);
            }
        })
    }
}
