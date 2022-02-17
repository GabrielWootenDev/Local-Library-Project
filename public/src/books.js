function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function findBookById(books, id) {
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  const returned = [];
  const checkedOut = books.reduce((acc, book) => {
    const isBorrowed = book.borrows.find((borrowed) => borrowed.returned === false);
    (isBorrowed) ? acc.push(book) : returned.push(book);
    return acc;
  }, []);
  const result = [checkedOut, returned];
  return result;
}


function getBorrowersForBook(book, accounts) {
  const bookBorrowers = [];
  book.borrows.forEach((borrow) => {
  const borrowingAccount = accounts.find((account) => account.id === borrow.id);
  borrowingAccount.returned = borrow.returned;
  bookBorrowers.push(borrowingAccount);
  })
    return bookBorrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
