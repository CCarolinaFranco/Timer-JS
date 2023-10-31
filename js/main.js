"use strict";

console.log("holis");



//console.log(date);

const hourHTML = document.querySelector('.js-hour');
const minutesHTML = document.querySelector('.js-munutes');
const secondsHTML = document.querySelector('.j-seconds');
const ampmHTML = document.querySelector('.js-ampm');
const dayWeekHTML = document.querySelector('.js-dayWeek');
const dayHTML = document.querySelector('.js-day');
const monthHTML = document.querySelector('.js-month');
const yearHTML = document.querySelector('.js-year');

const arrayWeek = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
const arrayMonths = ["Januery", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function updateTime() {
  const date = new Date();
  let amPm = "";
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();

  hourHTML.textContent = hours;
  minutesHTML.textContent = minutes;
  secondsHTML.textContent = second;
  ampmHTML.textContent = amPm;

if( hours>= 12){
  hours = hours - 12;
  amPm = "pm"
}
if(hours === 0){
  hours = 12; 
}

}
setInterval(updateTime, 1000);
updateTime();

function dayMonthYear() {

  const date = new Date();
  const day = date.getDay();
  const dayMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();


  dayWeekHTML.textContent = arrayWeek[day];
  dayHTML.textContent = dayMonth;
  monthHTML.textContent = arrayMonths[month];
  yearHTML.textContent = year;

}

dayMonthYear()