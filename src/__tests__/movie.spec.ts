import Movie from "../movie";

describe('testing class Movie', () => {
    test('create property', () => {
        // const result = {
        //     id: 4,
        //     title: 'Avenger',
        //     price: 300,
        //     secondTitile: 'Мстители',
        //     year: 2012,
        //     country: 'USA',
        //     slogan: 'Avenger Assamble',
        //     genre: 'Fantasy',
        //     runningTime: 137,
        // }
        const result = new Movie(4, 'Avenger', 300, 'Мстители', 2012, 'USA', 'Avenger Assamble', 'Fantasy', 137);
        expect(() => {
           const avengers = new Movie(4, 'Avenger', 300, 'Мстители', 2012, 'USA', 'Avenger Assamble', 'Fantasy', 137);
        }).toEqual(result);
    });
});