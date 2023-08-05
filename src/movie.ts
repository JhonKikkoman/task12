export default class Movie {
    id:number;
    title: string;
    price: number;
    secondTitile: string;
    year: number;
    country: string;
    slogan: string;
    genre: string;
    runningTime: number;
    constructor(id: number,
        title: string,
        price: number,
        secondTitile: string,
        year: number,
        country: string,
        slogan: string,
        genre: string,
        runningTime: number,
    ) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.secondTitile = secondTitile;
        this.year = year;
        this.country = country;
        this.slogan = slogan;
        this.genre = genre;
        this.runningTime = runningTime;

    }
}

// const avengers = new Movie(4, 'Avenger', 300, 'Мстители', 2012, 'USA', 'Avenger Assamble', 'Fantasy', 137);