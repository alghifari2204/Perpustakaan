class BookItem extends HTMLElement {
    set book(book) {
      this._book = book;
      this.render();
    }
  
    render() {
      this.innerHTML = `
              <img class="fan-art-book" src="${this._book.fanArt}" alt="Fan Art">
             <div class="book-info">
                 <h2>${this._book.name}</h2>
                 <p>${this._book.description}</p>
             </div>`;
    }
  }
  
  customElements.define("book-item", BookItem);
  