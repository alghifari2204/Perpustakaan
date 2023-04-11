class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }
 
  render() {
    this.innerHTML = `<h2>Perpustakaan Buku Komik dan Cerita</h2>`;
  }
}

customElements.define('app-bar', AppBar);