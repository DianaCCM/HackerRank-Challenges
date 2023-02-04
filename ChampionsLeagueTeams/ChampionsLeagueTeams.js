const https = require("https");

const requestData = (year, pageNumber) => {
  return new Promise((resolve, reject) => {
    let url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${pageNumber}`;
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

const checkTeams = (k, teams) => {
  return [...new Set(teams)].filter(
    (element) => teams.filter((a) => a === element).length >= k
  ).sort();
};

async function getTeams(year, k) {
  let pageNumber = 1;
  let totalPages = 1;
  let teams = [];
  while (pageNumber <= totalPages) {
    let data = await requestData(year, pageNumber);
    totalPages = JSON.parse(data).total_pages;
    let teamsInfo = JSON.parse(data).data;
    teamsInfo.forEach((match) => {
      teams.push(match.team1);
      teams.push(match.team2);
    });
    pageNumber += 1;
  }
  return checkTeams(k, teams);
}


/*getTeams(2015,13).then((result) => console.log(result))
                .catch((err) => console.error(err));*/

getTeams(2012,6).then((result) => console.log(result))
                .catch((err) => console.error(err));
