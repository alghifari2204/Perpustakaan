import "../component/book-list.js";
import "../component/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const bookListElement = document.querySelector('book-list');
  
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchBook(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
 
  const renderResult = (results) => {
    bookListElement.books = results;
  };

  const fallbackResult = (message) => {
    bookListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
