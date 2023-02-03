# JavaScript: Country Codes (HackerRank challenge)


In this challenge, the given REST API contains information about countries.

Given a two-letter unique country code, the task is to use the API to get the name of the country with the given code.

The given API uses pagination to return the data divided into pages. Fetching the whole data available on the API requires multiple requests.

To get a single page of countries data, perform HTTP GET request to https://jsonmock.hackerrank.com/api/countries?page=pageNumber where _pageNumber_ is an integer denoting the page number of the results we are requesting.

For example, a GET request to https://jsonmock.hackerrank.com/api/countries?page=2 will return the second page of the collection of countries. Pages are numbered from 1, so in order to access the first page, you need to ask for page number 1.

The response to such request is a JSON with the following 5 fields:

- **page**: The current page of the results. 

- **per_page**: The maximum number of countriesreturned per page. 

- **total**: The total number of countries on all pages of the results.

- **total_pages**: The total number of pages with results.

- **data**: An array of objects containing country information on the requested page.


Each country record has several fields, but in this task only these two are relevant:

- **name**: The name of the country.

- **alpha2Code**: The two-letter unique code of the country.


The following is guaranteed:

- There exists a country with the given code in the collection of countries available on the API.

- No two countries in the collection available on the API have the same alpha2code value.


**Function Description**

Complete the function _getCountryName_ in the editor below.

getCountryName has the following parameter: 
  
  string _code_: a two-letter string denoting the given country code

Returns:

  string: the name of the country with the given country code

## Input Format For Custom Testing

In the first and only line, there is a single string, code. reisa:

▾ Sample Case 0

**Sample Input For Custom Testing**

```bash
  AF
```

**Sample Output**

```bash
  Afghanistan
```

**Explanation**

The given country code is AF, and the matching country name is Afghanistan. The match can be found on page 1 of the API results.

