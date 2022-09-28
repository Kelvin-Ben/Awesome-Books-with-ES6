class Book {
  id='';

  title='';

  author='';

  constructor(paramid, paramtitle, paramauthor) {
    this.id = paramid;
    this.title = paramtitle;
    this.author = paramauthor;
  }

  generateBookLi(index) {
    return `<li class="book"><span class="book_details">"${this.title
    }" by ${this.author}</span><button class="remove_button" onClick="removeBook(${index})">Remove</button></li>`;
  }
}
export default Book;