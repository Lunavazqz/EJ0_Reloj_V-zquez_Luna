window.onload = function() {
    setInterval(getTime, 1000);
	getTimeAn();

	
	
	
};

function getTime(){
  
	let date = new Date();

	let hours    = date.getHours();
	let seconds  = date.getSeconds();
	let minutes  = date.getMinutes();
	
	let dateString = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds;

	document.querySelector('#hours').innerHTML = dateString;
			
};





function getTimeAn(){
	
	const minuteHand = document.querySelector('.minHand');
	const hourHand = document.querySelector('.hourHand');

	const now = new Date();
   
	/** SECONDS */
  	const seconds = now.getSeconds();
	/** Get seconds degrees from date */
  	const secondsDegrees = ((seconds / 60) * 360) + 90;
  
	

   	/** MINUTES */
  	const minutes = now.getMinutes();
  	/** Get minutes degrees from date */
	const minutesDegrees = ((minutes / 60) * 360) + 90;
  	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   
	/** HOURS */
  	const hours = now.getHours();
  	/** Get hours degrees from date */
  	const hoursDegrees = ((hours / 12) * 360) + 90;
  	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}





