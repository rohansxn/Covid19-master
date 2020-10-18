# Covid-19 Assignment

# See PROBLEM.md for requirements.

## Objective

The Objective of this assignment is to work with ReST API's , understand asynchronous programming and build interactive web pages using Javascript.  

## Prerequisites

1. Fork this boilerplate repository  
2. Clone the boilerplate repository and cd into it  
3. Install dependencies. The idea here is to use json-server to serve static pages and data. 
Note:  Use json-server only if 3rd party services are down.

```
  npm install
  npm run start (to get data from 3rd party api)
  json-server db.json -s ./public  ( to get data from local json server)
```

## Coding Guidelines

1. All your HTML code resides in public/index.html  
2. All your JavaScript code resides in the public/js folder  
3. All your CSS code resides in the public/css folder  
4. All your images resides in the public/images folder  
5. HTML, Javascript, CSS code should be well indented and commented  
6. You shall use Bootstrap to style your pages and elements  
7. The Assignment should be pushed to gitlab on completion and submitted for Preliminary Automated Review as described below.  


## Instructions 

 1 . It is mandatory to use Fetch API and Promises for all the HTTP calls   

 2. `public/js/script.js` is expected to have three functions -  
 	a. `getTotals()` - to fetch movies from `https://covid-19-data.p.rapidapi.com/totals`, populate them in DOM under `section id="totals">` and returns a promise with the JSON response from API  
	b. `getCountryTotal()` - to fetch favourites from `https://covid-19-data.p.rapidapi.com/country?name=<selecte-country>`, populate them in DOM under '<section id="selectedCountryTotals">' and returns a promise with the JSON response from API .

	Note:  take the country name from "input id='sCountry' ". default country should be India.
	c. `stats()` - to fetch favourites from `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats`, populate them in DOM under '<ul id="covid19Stats"> and returns a promise with the J'SON response from API  
	 
   Note:  You can write private function as and when required.

 3. Test cases for the assignment shall be found in `./test` directory which validates the solution and you shall ensure that all of them pass locally before you submit your code for an automated review (steps shared below)  
	To run test cases locally, you shall execute -  
	`npm install` (if not done already)  
	`npm run test`  
 6. You shall also fix any eslint errors if present in code. To run eslint check locally, you shall execute `npm run eslint`  
 7. Once you have fixed all test cases and eslint errors locally, you shall submit your solution for the automated review as described below.  

## Submitting your solution for preliminary automated review  

 1. Open https://hobbes-jpmc.stackroute.in/#/ and login into the platform  
 2. Under Assignment repository select `sa_js_covid_19_solution`, and branch master  
 3. Under Your solution repository select your own repository and branch  
 4. Press Submit  
 5. Press click here for the feedback  
 6. Evaluation will take around 2 mins to complete after which you need to refresh your browser and get the updated status  
 7. Watch out for your total score and detailed status on each test and eslint errors in the coloured blocks on the screen  
 8. Fix failing test cases as well as eslint errors and re-submit your solution until you get 100%  
 
## MENTORS TO BEGIN REVIEW YOUR WORK ONLY AFTER ->

- You add the respective Mentor as a Reporter/Master into your Assignment Repository

- You have checked your Assignment on the Automated Evaluation Tool - Hobbes (Check for necessary steps in your Boilerplate - README.md file. ) and got the required score - Check with your mentor about the Score you must achieve before it is accepted for Manual Submission.

- Intimate your Mentor on Slack and/or Send an Email to learner.support@stackroute.in - with your Git URL - Once you are done working and are ready for final submission.
 