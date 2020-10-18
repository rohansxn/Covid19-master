const chai = require('chai');
const expect = chai.expect;
const script = require('../public/js/script.js');
const fetchMock = require('fetch-mock');
const jsdom = require('mocha-jsdom');

describe('Covid-19', () => {
    jsdom();

    //declare mock data for totalsTestData, selectedCountryTestData etc., based on requirement
    
   //use beforeEach to display html template before executing each testcase
    beforeEach(() => {
        document.body.innerHTML =
            `
            //add template here to populate the data
            //see index.html to know the template.
            `;
    });

    afterEach(fetchMock.restore);

    //Define test specifications  for each method i.e., for getTotals(), getCountryTotal(),stats() etc.,
    
});
