class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    };
    getSummary() {
        return `${this.title} was writtten by ${this.author}
        in the year ${this.year}`;
    };
    getAge() {
        const years = new Date().getFullYear() -this.year;
        return `${this.title} is ${years} years old`;
    };
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    };
    static topBookStore() {
        return 'Barnes & Noble';
    }
}

// Instanciate Object
const book1 = new Book('Book One', 'John Doe', '2013');

// console.log(book1);
// console.log(book1.getAge());
// console.log(book1.getSummary());
// book1.revise('2020');

console.log(Book.topBookStore());






