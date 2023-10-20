let isDOBOpen = false;
const btn =document.getElementById("btn");
const btn1 =document.getElementById("btn1");
const date =document.getElementById("dateId");
const inputId =document.getElementById("inputId");
const btn2 =document.getElementById("btn2");
const first =document.getElementById("first");
const second =document.getElementById("second");

const yearEl =document.getElementById("year");
const monthEl =document.getElementById("months");
const dayEl =document.getElementById("days");
const hourEl =document.getElementById("hours");
const minuteEl =document.getElementById("minutes");
const secondEl =document.getElementById("seconds");
const birthSelector =() =>{
   if(isDOBOpen){
    document.getElementById("dateId").style.display="none";
   } else {
    document.getElementById("dateId").style.display="block";
    document.getElementById("btn1").style.display="none";
    
   }
   isDOBOpen =! isDOBOpen;
}
btn1.addEventListener("click",() =>{
    birthSelector()
})
const updateAge= ()=>{
    const currentDate = new Date();
    const dateDiff = currentDate -  dateOfBirth;
    const years = Math.floor(dateDiff /(1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(dateDiff /(1000 * 60 * 60 * 24 * 365)%12);
    const days = Math.floor(dateDiff /(1000 * 60 * 60 * 24 )%30);
    const hours = Math.floor(dateDiff /(1000 * 60 * 60 )%24);
    const minutes = Math.floor(dateDiff /(1000 * 60)%60);
    const seconds = Math.floor(dateDiff /(1000 )%60);
    // console.log({years,months,days,hours,minutes,seconds});

    yearEl.innerHTML = years;
    monthEl.innerHTML = months;
    dayEl.innerHTML = days;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
}

const setDObHandler=()=>{
    const dateString= inputId.value;
    dateOfBirth = new Date(dateString);
    if(inputId.value){
        document.getElementById("first").style.display="none";
        document.getElementById("second").style.display="block";
        document.getElementById("dateId").style.display="none";
        // updateAge()
        setInterval(()=> updateAge(),1000)
       } else {
        document.getElementById("first").style.display="block";
        document.getElementById("second").style.display="none";
       }
}
setDObHandler()
btn2.addEventListener("click",() =>{
    setDObHandler()
})


