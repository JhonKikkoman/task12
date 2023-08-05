import Movie from "../movie";
import Cart from "../cart";

describe('testing class Movie', () => {
    test('create property', () => {
        const result = {
            id: 4,
            title: 'Avenger',
            price: 300,
            secondTitile: 'Мстители',
            year: 2012,
            country: 'USA',
            slogan: 'Avenger Assamble',
            genre: 'Fantasy',
            runningTime: 137,
        }
        const receiver = new Movie(4, 'Avenger', 300, 'Мстители', 2012, 'USA', 'Avenger Assamble', 'Fantasy', 137);
        expect(receiver).toEqual(result);
    });
});

describe('testing class Cart methods', () => {
    test('check in method totalSum', () => {
        const cart = new Cart();
        const receiver = cart.totalSum();
        expect(receiver).toBe(800);
    });
    test('check in method sumWithDiscount', () => {
        const cart = new Cart();
        const receiver = cart.sumWithDiscount(10);
        expect(receiver).toBe(720)
    });
    test('check in method deleteFromCart', () => {
        const cart = new Cart();
        cart.deleteFromCart(4);
        const result = [
            {
                id: 6,
                name: "Avengers-LastStand",
                price: 500,

            }
        ]
        expect(cart.items).toEqual(result);
    });
});