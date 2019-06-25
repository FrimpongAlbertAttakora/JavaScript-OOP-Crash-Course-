//const s1 = 'Hello';
//const s1 = 'Hello';
//console.log(s1.toUpperCase());
//console.log(typeof s1);

//const s2 = new String('Hello');
//console.log(typeof s2);

//console.log(window); // shows the object windows.
//window.alert('Albert A. Frimpong');
//alert('Albert A. Frimpong');//works becaouse window is the parent node of our browser
//console.log(navigator.appVersion);

//creating an object

// Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was writtten by ${this.author}
        in the year ${this.year}`;
    }
};
const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function() {
        return `${this.title} was writtten by ${this.author}
        in the year ${this.year}`;
    }
};

//console.log(book1);// this shows the object book1
//console.log(book1.author);// this gives the author property of the book1 object.
//console.log(book1.getSummary());// this gives the getsummary method of the book1 object.
//console.log(book2.getSummary());// this gives the getsummary method of the book1 object.

//console.log(Object.values(book2));// this gives the values of book2
