// document.getElementById('search_button').addEventListener('click', () => {
//     const inputCountry = document.getElementById('country').value;
//     fetch('https://api.covid19api.com/summary')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             const country = data.country;
//             document.getElementById('location').innerText = country;
//             document.getElementById('totalConfirm').innerText = data.totalConfirm;
//             document.getElementById('newConfirm').innerText = data.newConfirm;
//             document.getElementById('totalDeath').innerText = data.totalDeath;
//             document.getElementById('date').innerText = data.date;
//         })
//         .catch(error => alert("Please type a valid country name!"));
// })
document.getElementById('search_button').addEventListener('click', () => {
    const inputCountry = document.getElementById('country').value;
    fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(data => {
            const country = data.Countries[0].Country;
            document.getElementById('location').innerText = "Country: " + country;
            console.log(data.Countries[0].Country, data.Countries[0].TotalConfirmed, data.Countries[0].NewConfirmed, data.Countries[0].Date)
            document.getElementById('totalConfirm').innerText = "Total Confirm: " + data.Countries[0].TotalConfirmed;
            document.getElementById('newConfirm').innerText = "Total New Confirm: " + data.Countries[0].NewConfirmed;
            document.getElementById('totalDeath').innerText = "Total Deaths: " + data.Countries[0].TotalDeaths;
            document.getElementById('date').innerText = "Date: " + data.Countries[0].Date;
        })
        .catch(error => alert("Please type a valid country name!"));
})