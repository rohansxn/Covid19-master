//3rd party url :  https://covid-19-data.p.rapidapi.com
//To get rapidapi key, register in above site.
//This rapidapi key along with host need to send through header to hit 3rd party servicies
//For further details see above site.

let confirmed = document.getElementById("confirmed");
let recovered = document.getElementById("recovered");
let deaths = document.getElementById('deaths');
let lastChecked = document.getElementById("lastChecked");
const searchCountry = document.getElementById("sCountry");
const selectedCountry = document.getElementById("selectedCountry");
const selectedConfirmed = document.getElementById("selectedConfirmed");
const selectedRecovered = document.getElementById("selectedRecovered");
const selectedDeaths = document.getElementById("selectedDeaths");
var click= document.getElementById('demo');
var temp;
/*
 * -------- Display Time
 */
function timeDisplay() {
	const fetchPromise = fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
			"x-rapidapi-key": "ce743ee195msha115c2444bd7c14p1a4337jsne97d9e83b40d"
		}
	})
	fetchPromise.then(response => response.json().then( data => {
	    console.log(data);
	    lastChecked.innerHTML = data.statistic_taken_at;
        })).catch(err => {
            console.log(err);
        });
}
async function getTime() {
	const displayTime = await timeDisplay();
	return displayTime;
}
getTime();

/*
 * -------- Display World data count
 */
function worldTotalCases() {
	
	const fetchPromise = fetch("https://covid-19-data.p.rapidapi.com/totals", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
			"x-rapidapi-key": "ce743ee195msha115c2444bd7c14p1a4337jsne97d9e83b40d"
		}
	})
	fetchPromise.then(response => response.json().then( data => {
	    console.log(data);
	    confirmed.innerHTML = data[0].confirmed;
	    recovered.innerHTML = data[0].recovered;
	    deaths.innerHTML = data[0].deaths;
	
	})).catch(err => {
	    console.log(err);
	});
}

async function getTotals() {
	//Get total deaths, confirmed,recovered count
	//3rd party url :  https://covid-19-data.p.rapidapi.com/totals
	//Send x-rapidapi-host and x-rapidapi-key through header
	//After getting response,  populate/display total in correspnding html elemements
	//See index.hmtl
	//Can use private method to populate/display data and call here
	const totalCases = await worldTotalCases();
	return totalCases;

}
/*
 * -------- Display India details
 */
function displayIndia() {
	const url ="https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_iso_alpha_3.php?alpha3=India";
	const fetchPromise = fetch(url, {
		"method": "GET",
		"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "ce743ee195msha115c2444bd7c14p1a4337jsne97d9e83b40d"
		}
		})
	fetchPromise.then(response => response.json().then( data => {
	            console.log(data);
	            selectedCountry.innerHTML = data.latest_stat_by_country[0].country_name;
	            selectedConfirmed.innerHTML = data.latest_stat_by_country[0].total_cases;
	            selectedRecovered.innerHTML = data.latest_stat_by_country[0].total_recovered;
	            selectedDeaths.innerHTML = data.latest_stat_by_country[0].total_deaths;
	}))
	.catch(err => {
	console.log(err);
	});
	}
displayIndia();

/*
 * -------- Display selected country details
 */
function selectedCountryTotal(){
	searchCountry.addEventListener('change', (event) => {
		//var countryName = changevalue(event);
		temp= event.target.value;
		/*const url ="https://covid-19-data.p.rapidapi.com/country?name="+countryName;
		const fetchPromise=fetch(url, {
			"method": "GET",
			"headers": {
				"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
				"x-rapidapi-key": "ce743ee195msha115c2444bd7c14p1a4337jsne97d9e83b40d"
			}
		})
		fetchPromise.then(response => response.json().then( data => {
		            console.log(data);
		            selectedCountry.innerHTML = data[0].country;
		            selectedConfirmed.innerHTML = data[0].confirmed;
		            selectedRecovered.innerHTML = data[0].recovered;
		            selectedDeaths.innerHTML = data[0].deaths;
		}))
		.catch(err => {
		console.log(err);
		}); */
		});
}
click.onclick = function changeContent() {
	const url ="https://covid-19-data.p.rapidapi.com/country?name="+temp;
	const fetchPromise=fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
			"x-rapidapi-key": "ce743ee195msha115c2444bd7c14p1a4337jsne97d9e83b40d"
		}
	})
	fetchPromise.then(response => response.json().then( data => {
	            console.log(data);
	            selectedCountry.innerHTML = data[0].country;
	            selectedConfirmed.innerHTML = data[0].confirmed;
	            selectedRecovered.innerHTML = data[0].recovered;
	            selectedDeaths.innerHTML = data[0].deaths;
	}))
	.catch(err => {
	console.log(err);
	});

	}
var getvalue;

function changevalue(event){
	getvalue= event.target.value;
	return getvalue;
	}

async function getCountryTotal() {
	const selectedCountry = await selectedCountryTotal();
	return selectedCountry;
}

/*
 * -------- Display total count of country affected
 */
function totalCountryAffected() {
const fetchPromise = fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "ce743ee195msha115c2444bd7c14p1a4337jsne97d9e83b40d"
	}
})
fetchPromise.then(response => response.json().then(data =>{
    console.log(data)
    let affected_countries = data.affected_countries;
    var totalLength = affected_countries.length;
      for(let i = 0; i<totalLength;i++){
          console.log(totalLength); 
          count.innerHTML = totalLength;  
      }
      var html = "<table id='countries_stat'";
      html+="<tr>" ;
      html+="<th>"+ "Country_Name"+ "</th>";
      html+="</tr>";
      for (var i = 0; i < affected_countries.length; i++) {
          
          html+="<tr>" ;
          html+="<td>"+affected_countries[i]+"</td>";
          html+="</tr>";

      }
      html+="</table>";
      document.getElementById("covid19Stats").innerHTML = html;
      
      
}))
.catch(err => {
    console.log(err);
});
}
async function getTotalCountryAffected() {
	const affectedCount = await totalCountryAffected();
	return affectedCount;
}
getTotalCountryAffected();

let table = document.getElementById('countries_stat');
function allCountryData() {
	const fetchPromise =fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "ce743ee195msha115c2444bd7c14p1a4337jsne97d9e83b40d"
	}
})
	fetchPromise.then(response => response.json().then(data =>{
	    console.log(data)
	    let countries_stat = data.countries_stat;
	    
	    var html = "<table id='countries_stat'";
	    html+="<tr>" ;
	    html+="<th>"+ "Country_Name"+ "</th>";
	    html+="<th>"+ "Cases"+ "</th>";
	    html+="<th>"+ "Deaths"+ "</th>";
	    html+="<th>"+ "Recovered"+ "</th>";
	    html+="</tr>";
    for (var i = 0; i < countries_stat.length; i++) {
        
        html+="<tr>" ;
        html+="<td>"+countries_stat[i].country_name+"</td>";
        html+="<td>"+countries_stat[i].cases+"</td>"; 
        html+="<td>"+countries_stat[i].deaths+"</td>";
        html+="<td>"+countries_stat[i].total_recovered+"</td>";

        html+="</tr>";

    }
    html+="</table>";
    document.getElementById("covid19Stats_details").innerHTML = html;
  
      }))

.catch(err => {
    console.log(err);
});
}

async function stats() {
	//Get data of all countries
	//3rd party url :  https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats
	//Send x-rapidapi-host and x-rapidapi-key through header
	//After getting response,  populate/display all countries
	//as well as all acountries data
	//See index.hmtl
	//Can use private method to populate/display data and call here
	const result = await allCountryData();
	return result;
}

module.exports = {
	getTotals,
	stats,
	getCountryTotal
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution


