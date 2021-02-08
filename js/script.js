// call api 
fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => displayGlobal(data.Global))
    .catch(error => alert("Something Went wrong! Please try again later!"));

// display global cases 
const displayGlobal = global => {
    const globalCase = document.getElementById('globalCase');
    console.log(global.NewConfirmed);
    globalCase.innerHTML = `
    <h2>Total Case: ${global.TotalConfirmed}</h2>
    <h2>Total Deaths: ${global.TotalDeaths}</h2>
    <h2>Total Recovered: ${global.TotalRecovered}</h2>`;
}

// call api   critical
fetch('https://disease.sh/v3/covid-19/countries')
    .then(res => res.json())
    .then(data => displayCountries(data))
    .catch(error => alert("Something Went wrong! Please try again later!"));

// details about countries     
const displayCountries = countries => {
    const countriesList = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country.country);
        const countryDetails = document.createElement('div');
        countryDetails.className = 'country';
        const countryInfo = `
            <img src="${country.countryInfo.flag}"><br><br>
            <h3 class="text-center">${country.country}</h3>
            <h5 class="text-center">Continent: ${country.continent}</h5><br>
            <p>Critical: ${country.critical}</p>
            <p>Population: ${country.population}</p>
            <p>New Confirmed: ${country.todayCases}</p>
            <p>New Deaths: ${country.todayDeaths}</p>
            <p>New Recovered: ${country.todayRecovered}</p>
            <p>Total Confirmed: ${country.cases}</p>
            <p>Total Deaths: ${country.deaths}</p>
            <p>Total Recovered: ${country.recovered}</p>`;
        countryDetails.innerHTML = countryInfo;
        countriesList.appendChild(countryDetails);
    });
}