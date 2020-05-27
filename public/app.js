async function run(){

    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const month = date.getMonth() + 1;
    const day = date.getDate(); 
 
    let response = await fetch('https://api.covid19api.com/world?from=2020-0' + month +'-'+ (day-1) +'T'+time+'Z&to=2020-0'+month+'-'+(day)+'T'+time+'Z');
    response.json().then( (data) => {
        document.getElementById("world").textContent = "WORLD DATA";
        document.getElementById('total').innerHTML = 'Total Cases : ' + data[0].TotalConfirmed;
        document.getElementById('recovered').innerHTML = 'Recovered : ' + data[0].TotalRecovered;
        document.getElementById('death').innerHTML = 'Deaths : ' + data[0].TotalDeaths;
    
        document.getElementById("t").textContent = "last 24 hours (updates every 10 minutes)";
        document.getElementById('lasttotal').innerHTML = 'Total Cases : ' + data[0].NewConfirmed;
        document.getElementById('lastrecovered').innerHTML = 'Recovered : ' + data[0].NewRecovered;
        document.getElementById('lastdeath').innerHTML = 'Deaths : ' + data[0].NewDeaths;
        document.getElementById("foot").textContent = "stay home🏡";
    }); 
}
    