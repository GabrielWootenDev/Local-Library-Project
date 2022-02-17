function getTotalBooksCount(books) {
  const bookNames = books.map(book => book.title);
  return bookNames.length;
}

function getTotalAccountsCount(accounts) {
  const accountNamesByLast = accounts.map(account => account.name);
  return accountNamesByLast.length;
}

function getBooksBorrowedCount(books) {
  const result = books.reduce((borrowed, book) => {
   if (!book.borrows[0].returned) borrowed.push(book);
    return borrowed;
  }, []);
  return result.length;
}

function getMostCommonGenres(books) {
  const genresOfBooks = {};
  const mostPopularGenres = [];
  books.forEach((book) => (!genresOfBooks[book.genre]) ? (genresOfBooks[book.genre]) = 1 : genresOfBooks[book.genre]++);
  for (let name in genresOfBooks) {
    const popularity = genresOfBooks[name];
    const genreObject = {name: name, count: popularity};
    mostPopularGenres.push(genreObject);
  }
 return mostPopularGenres.sort((genreA, genreB) => (genreA.count < genreB.count) ? 1 : -1).slice(0, 5);
}

function getMostPopularBooks(books) {
  const bookPopularity = [];
  for (let name in books) {
    const bookName = books[name].title;
    const popularity = books[name].borrows.length;
    bookPopularity.push({name : bookName, count: popularity});
  }
  return bookPopularity.sort((bookA, bookB) => (bookA.count < bookB.count) ? 1 : -1).slice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const mostPopularAuthors = [];
  authors.forEach (author => {
    let namedAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }
    books.forEach(book => {
      if (book.authorId === author.id) {
        namedAuthor.count += book.borrows.length
      }
    })
    mostPopularAuthors.push(namedAuthor);
  })
  return mostPopularAuthors.sort((authorA, authorB) => (authorA.count < authorB.count) ? 1 : -1).slice(0,5);
}
                  
                  
                  
                  
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
