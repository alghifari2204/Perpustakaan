class DataSource {
  static searchBook(keyword) {
   return fetch(`https://www.library-api.dev/teams/search?t=${keyword}`)
   .then((response) => {
    return response.json();
   })
   .then((responseJson) => {
    if(responseJson.teams){
      return Promise.resolve(responseJson.teams);
    } else {
      return Promise.reject(`${keyword} is not found`);
    }
   });
  }
}

export default DataSource;