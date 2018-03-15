module.exports = {
  queryParser: function(query) {
    const unixString = new RegExp(/^\d{10}$/);
    const dateString = new RegExp(/\w{3,9}?\s\d{1,2}\,\s\d{2,4}/);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const results = {
      unix: null,
      natural: null
    };

    // If the request is a unix string
    if (unixString.test(query)) {
      const date = new Date(query * 1000);

      results.unix = Number(query);
      results.natural = `${months[date.getMonth()]} ${date.getDate() + 1}, ${date.getFullYear()}`;
    }

    // If the request is a natural date string
    if(dateString.test(query)) {
      results.unix = new Date(query).getTime() / 1000;
      results.natural = query;
    }

    return results;
  }
}