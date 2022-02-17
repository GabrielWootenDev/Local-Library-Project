function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1);
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  const allBorrows = books.reduce((acc, book) => {
    acc.push(...book.borrows);
    return acc;
  }, []);
  const result = allBorrows.filter((borrow) => borrow.id === account.id);
  console.log(result);
  return result.length;
} 

/* using this function from the books file to help here */
function findAuthorById(authors, id) {
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;
}

function getBooksPossessedByAccount(account, books, authors) {
  const currentlyPossessed = books.reduce((acc, book) => { 
    const bookWithAuthor = {...book, author : findAuthorById(authors, book.authorId)}
    if (book.borrows[0].id === account.id && !book.borrows[0].returned) acc.push(bookWithAuthor);
    return acc;
  }, []);
  return currentlyPossessed;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
