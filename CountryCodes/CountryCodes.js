const https = require("https");

const requestData = (pageNumber) => {
  return new Promise((resolve, reject) => {
    let url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`;
    https.get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response
        .on("end", () => {
          return resolve(data);
        })
        .on("error", (err) => {
          console.log("Error: " + err.message);
          return reject(null);
        });
    });
  });
};

async function getCountryName(code) {
  let pageNumber = 1;
  let country = null;
  while (country === null) {
    let data = await requestData(pageNumber);
    let countries = JSON.parse(data).data;
    let total = JSON.parse(data).total_pages;
    let found = countries.find((item) => item.alpha2Code === code);
    country = found != undefined ? found.name : null;
    if (pageNumber > total) {
      break;
    }
    pageNumber += 1;
  }
  return country;
}

getCountryName("ZW").then((result) => {
  console.log(result);
});
