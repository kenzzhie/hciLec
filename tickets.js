let seats = document.querySelectorAll('.seat');
let selectedSeats = [];
let ticketDate = document.querySelector('.ticket-date'); 
let ticketHour = document.querySelector('.ticket-hour'); 
let ticketSeat = document.querySelector('.ticket-seat'); 
const dates = document.querySelectorAll('.dates-opt');
const hours = document.querySelectorAll('.hours-opt');
const pay = document.querySelector('.payBtn');
const clear = document.querySelector('.clearBtn');
const popUp = document.querySelector('.popUp');
const overlay = document.querySelector('.overlay');



seats.forEach(function(seat){
  seat.addEventListener('click', function() {
    if (seat.src.includes('assetsWebFinal/seatTaken.png')) {
      seat.src = "assetsWebFinal/seat.png"; 
    } else {
      seat.src = "assetsWebFinal/seatTaken.png"; 
    }

    let seatText = this.nextElementSibling.textContent;
    
    if (selectedSeats.includes(seatText)) {
      let index = selectedSeats.indexOf(seatText);
      selectedSeats.splice(index, 1);
    } else {
      if (selectedSeats.length < 6) {
        selectedSeats.push(seatText);
      } else {
        alert('Maximum of 6 seats can be selected.');
      } 
    }
    console.log(selectedSeats);

    ticketSeat.textContent = 'Seat : ' + selectedSeats;
  });
});


dates.forEach(function(date){
  date.addEventListener('click', function(){
    dates.forEach(function(date){
      date.classList.remove('selected');
    });

    if(this.classList.contains('selected')){
      date.classList.remove('selected');
    }else{
      this.classList.toggle('selected');
    }
    
    let day = this.querySelector('p:first-child').textContent;
    let dateNum = this.querySelector('p.dates-num').textContent;

    console.log("Day: ", day);
    console.log("Date Num: ", dateNum);

    ticketDate.textContent = 'Date : ' + day + ', ' + dateNum;
  });
});

hours.forEach(function(hour){
  hour.addEventListener('click', function(){
    hours.forEach(function(hour){
      hour.classList.remove('selected');
    });

    if(hour.classList.contains('selected')){
      hour.classList.remove('selected');
    }else{
      hour.classList.toggle('selected');
    }
    
    let time = this.querySelector('p:first-child').textContent;

    ticketHour.textContent = 'Start : ' + time ;

  });
});


pay.addEventListener('click', function(){
  popUp.style.display = 'block';
  overlay.style.display = 'block';
});

popUp.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Yes') {
    window.location.href = 'payment.html';
  }
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'No') {
    popUp.style.display = 'none';
    overlay.style.display = 'none';
  }
});

clear.addEventListener('click', function(){
  ticketDate.textContent = 'Date : ';
  ticketHour.textContent = 'Start : ' ;
  ticketSeat.textContent = 'Seat : ' ;

  hours.forEach(function(hour){
    hour.classList.remove('selected');
  });

  dates.forEach(function(date){
    date.classList.remove('selected');
  });

  seats.forEach(function(seat){
    if (seat.src.includes('assetsWebFinal/seatTaken.png')) {
      seat.src = "assetsWebFinal/seat.png"; 
    } 
  });

})










