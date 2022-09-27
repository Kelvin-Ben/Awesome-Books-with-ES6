import BookPage from './bookpage.js';
import Book from './book.js';

const booksList = () => {
  const page = new BookPage();
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  function displayComponent(elmnts) {
    if (elmnts.isArray) {
      elmnts.forEach((elmnt) => {
        const test = elmnt.classList;
        if (test.contains('hidden_item')) {
          test.remove('hidden_item');
        }
      });
    } else {
      const test = elmnts.classList;
      if (test.contains('hidden_item')) {
        test.remove('hidden_item');
      }
    }
  }
  function HideComponent(elmntsParam) {
    const elmnts = Array.from(elmntsParam);
    elmnts.forEach((elmnt) => {
      const test = elmnt.classList;
      if (!test.contains('hidden_item')) {
        test.toggle('hidden_item');
      }
    });
  }

  function addnewbook(e) {
    e.preventDefault();
    page.addBook(new Book(page.generateId(), title.value, author.value));
    page.refreshBookList();
    title.value = '';
    author.value = '';
    displayComponent(document.querySelector('.books'));
    HideComponent([document.querySelector('.nodata_Message')]);
  }

  function removeBook(index) {
    if (index >= 0) {
      page.remove(index);
      page.refreshBookList();
      if (page.booklist.length === 0) {
        displayComponent(document.querySelector('.nodata_Message'));
        HideComponent([document.querySelector('.books')]);
      }
    }
  }

  removeBook(-2);
  document.querySelector('.submit_button').addEventListener('click', addnewbook);
  window.removeBook = removeBook;
};

export default { booksList };