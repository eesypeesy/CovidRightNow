async function run(){

    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    document.getElementById("fetching2").innerHTML= "(this usually takes less than 5 seconds)";
    setTimeout(() => {
        if(!window.navigator.onLine){document.getElementById("fetching2").innerHTML= "(deploying bigger and faster antennas)";
        document.getElementById("head").innerHTML= "still trying";
        document.getElementById("load").style.animation = "rotate .5s ease-in-out alternate-reverse infinite";
    }
    },10000);
    setTimeout(() => {
        if(!window.navigator.onLine){
        document.getElementById("fetching").innerHTML= "fetching failed :( <div id='fetching2'>please check your connection and reload </div>";
        document.getElementById("load").style.display = "none";}
    },20000);

    let response1 = await fetch('https://disease.sh/v2/all');
    response1.json().then( (data) => {
        
        document.getElementById('fetching').style.display = "none";
        document.getElementById('load').style.display = "none";
        document.getElementById('worldhead').innerHTML = 'World';
        document.getElementById('worldbracket').innerHTML = 'last 24 hours data given in bracket';
        document.getElementById('total').innerHTML = 'Confirmed : ' + data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +' ( '+ data.todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' )';
        document.getElementById('recovered').innerHTML = 'Recovered : ' + data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' ( '+ data.todayRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' )';
        document.getElementById('death').innerHTML = 'Deaths : ' + data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' ( '+ data.todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' )';
    
        document.getElementById("foot1").innerHTML = "last updated(world) : " + new Date(data.updated);
    }); 

    let response2 = await fetch('https://api.covid19india.org/data.json');
    response2.json().then((data2) => {
        let india = data2.statewise[0]; 
        let intoday = data2.cases_time_series;
        let inlength = intoday.length - 1;
        
        console.log(data2);
        
        document.getElementById('indiahead').innerHTML = 'India';
        document.getElementById('indiatotal').innerHTML = 'Confirmed : ' + india.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +' ( '+ intoday[inlength].dailyconfirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' )';
        document.getElementById('indiarecovered').innerHTML = 'Recovered : ' + india.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' ( '+ intoday[inlength].dailyrecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' )';
        document.getElementById('indiadeath').innerHTML = 'Deaths : ' + india.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' ( '+ intoday[inlength].dailydeceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' )';

        document.getElementById("foot2").innerHTML = "last updated(india) : " + india.lastupdatedtime;
    })
}
    