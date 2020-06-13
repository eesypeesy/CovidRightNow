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

    let response = await fetch('https://disease.sh/v2/all');
    response.json().then( (data) => {
        document.getElementById('fetching').style.display = "none";
        document.getElementById('load').style.display = "none";
        document.getElementById('total').innerHTML = 'Total Cases : ' + data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('recovered').innerHTML = 'Recovered : ' + data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('death').innerHTML = 'Deaths : ' + data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        document.getElementById("foot2").innerHTML = "last updated : <br>" + new Date(data.updated);
    }); 
}
    