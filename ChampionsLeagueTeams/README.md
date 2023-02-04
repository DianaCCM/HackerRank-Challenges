# JavaScript: Champions League Teams

In this challenge, the given REST API contains information about football matches played in the years 2011-2015.

Given a year and integer _k_, denoting the minimum number of matches we are interested in, your task is to use the API to get the names of teams that played at least _k_ matches in the given year in the competition named UEFA Champions League. The names must be returned as an array and ordered in ascending order.

The given API uses pagination to return the data divided into pages. Fetching the whole data available on the API requires multiple requests.

To get a single page of matches played in UEFA Champions League in the given year, perform HTTP GET request to: **https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=year&page=pageNumber** where _year_ denotes the year of the match and _pageNumber_ is an integer denoting the page of the results we are requesting.

For example, a GET request to https://jsonmock.hackerrank.com/api/footballmatches?competition-UEFA%20Champions%2OLeague&year=2011&page=2 will return page 2 of the collection of matches played in the UEFA Champions League in the year 2011. Pages are numbered from 1, so in order to access the first page, you need to ask for page number 1.

The response to such request is a JSON with the following 5 fields:

- **page**: The current page of the results.

- **per_page**: The maximum number of matches returned per page.

- **total**: The total number of matches on all pages of the result.

- **total pages**: The total number of pages with results. 

- **data**: An array of objects containing matches information on the requested page

Each match record has several fields, but in this task only these two are relevant:

- **team1**: The name of the first team in the match.

- **team2**: The name of the second team in the match.

It is guaranteed that there exists at least one team that will be included in the resulting array.

**Function Description**

Complete the function _getTeams_ in the editor below.

_getTeams_ has the following parameters: 

int _year_: the year being queried

int _k_ the minimum matches that a team must have played during the given year to be included in the result 

Returns:

string[]: an array denoting the names of teams that played at least _k_ matches in the UEFA Champions League in the given year, returned in ascending order

### Input Format For Custom Testing

In the first line, there is a single integer, year. 

In the second line, there is a single integer, k

▾ Sample Case 0

**Sample Input For Custom Testing**
```bash
STDIN    Function
-----    --------
2015  →  year = 2015
13    →  k = 6
```

**Sample Output**
```bash
Atletico Madrid
Real Madrid
```

**Explanation**
In this case, we are interested in teams that played in the UEFA Champions League in the year 2015 and played in at (...)


▾ Sample Case 1

**Sample Input For Custom Testing**
```bash
STDIN    Function
-----    --------
2012  →  year = 2015
6     →  k = 6
```

**Sample Output**
```bash
AC Milan

AFC Ajax

Arsenal

BATE Borisov

Barcelona

Bayern Munich

Borussia Dortmund

CFR Cluj Celtic

Chelsea

Dynamo kyiv

Dynamo Zagreb

FC Porto

Galatasaray

Juventus

Lille OSC

Malaga CF

Manchester City

Manchester United

Montpellier HSC

Boardsjael Land Olympiacos

Paris Saint-Germain

(...)
```
