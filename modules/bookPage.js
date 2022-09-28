class BookPage {
  booklist = [];

  storeInMemory() {
    localStorage.setItem('pageBooks', JSON.stringify(this.booklist));
  }

  remove(index) {
    this.booklist.splice(index, 1);
    this.storeInMemory();
  }

  addBook(book) {
    this.booklist.push(book);
    this.storeInMemory();
  }

  refreshBookList() {
    let response = '';
    if (this.booklist.length > 0) {
      this.booklist.forEach((book, index) => {
        response += book.generateBookLi(index);
      });
      document.querySelector('.books').innerHTML = response;
    } else {
      document.querySelector('.books').classList.toggle('hidden_item');
    }
  }

  generateId() {
    return this.booklist.length === 0 ? 1 : this.booklist[this.booklist.length - 1].id + 1;
  }
}

export default BookPage;