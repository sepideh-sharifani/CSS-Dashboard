const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const trigger = document.querySelector(".trigger")
const mode = document.querySelector(".moon-sun");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const ctx = document.getElementById('line-chart');
const dtx= document.getElementById('donut-chart'); 


function myFunction() {
  var x = document.querySelector(".mobile-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

toggle.addEventListener('click', () => {
    sidebar.classList.toggle("close");
})

moon.addEventListener('click', () =>{
    body.classList.toggle("dark");
    ctx.classList.toggle("dark");
    moon.style.display = "none";
    sun.style.display = "block";

})

sun.addEventListener('click', () =>{
    body.classList.remove("dark");
    moon.style.display = "block";
    sun.style.display = "none";
})


trigger.addEventListener('click' , () =>{

})

  new Chart(ctx, {
    data: {
    labels :[
      'فروردین',
        'اردیبهشت',
        'خرداد',
        'تیر',
        'مرداد',
        'شهریور',
        'مهر',
        'آبان',
        'آذر',
        'دی',
        'بهمن',
        'اسفند'
    ],
      datasets: [{
        type: 'line',
        label: 'محمدی',
        data: [12, 19, 3, 52, 26, 35, 5, 48, 7, 6, 3, 14],
        fill : false,
        borderColor:'#D5D5F1', 
      },
      {
        type: 'line',
        label: 'اشتیانی',
        data: [13, 5, 3, 58, 2, 31, 47, 5, 89, 32, 17, 42],
        fill : false,
        borderColor:'#F1B43F',
      },
      {
        type: 'line',
        label: 'اصغری',
        data: [20, 85, 34, 58, 20, 36, 24, 46, 72, 34, 16, 95],
        fill : false,
        borderColor:'#353AAF',
      },
      {
        type: 'line',
        label: 'دربندسری',
        data: [2, 19, 3, 18, 20, 3, 2, 4, 6, 8, 10, 17],
        fill : false,
        borderColor:'#e2c48b',
      },
      {
        type: 'line',
        label: 'طورسینا',
        data: [2, 19, 3, 18, 20, 3, 20, 40, 6, 8, 10, 25],
        fill : false,
        borderColor:'#ce9a0b'
      }]
    },
  });


  new Chart (dtx, { 
    type: 'doughnut',
    data :{
    labels: [
      'تلگرام',
      'اینستاگرام',
      'یوتیوب',
      'واتساپ',
      'لینکدین'
    ],
    datasets: [{
      
      data: [3000, 4000, 100, 200, 400],
      backgroundColor: [
        '#D5D5F1',
        '#F1B43F',
        '#353AAF',
        '#e2c48b',
        '#ce9a0b'
      ],
      hoverOffset: 5
    }]
  },
});