const search=document.getElementById('search');
const input=document.getElementById('input'); 
const cityName=document.getElementById('city');
const temperature=document.getElementById("temp");
const time=document.getElementById('time');


async function getData(cityName){
  const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=bd232f51868b42afbdd110345241110&q=${cityName}&aqi=yes`)
  return await promise.json();
}

search.addEventListener('click',async ()=>{
const value=input.value
const result=await getData(value);
cityName.innerHTML=`${result.location.name},${result.location.country}`;
temperature.innerHTML=`${result.current.temp_c}°C`;
time.innerHTML=`${result.location.localtime}`;
})