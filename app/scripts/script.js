window.onload = () => {
    let countDownDate = new Date("Aug 6, 2018").getTime();
    let countdownElement = document.querySelector("#countdown");
    let updateCountdown = function() {
        let evaluate = value => value < 10 ? `0${value}` : value;

        // Find the distance between now an the count down date
        let distance = countDownDate - Date.now();
        
        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Display the result in the element with id="demo"
        countdownElement.innerHTML = `
            <span class="clock">${evaluate(days)}</span> dia${days == 1 ? '' : 's'}, 
            <span class="clock">${evaluate(hours)}</span> hora${hours == 1 ? '' : 's'} e 
            <span class="clock">${evaluate(minutes)}</span> minuto${minutes == 1 ? '' : 's'}`;
        
        // If the count down is finished, write some text 
        if (distance <= 0) {
            intervalControl && clearInterval(intervalControl);
            countdownElement.innerHTML = "O evento começou! Aproveite!";
        }
    };

    let intervalControl = setInterval(updateCountdown, 60000);
    updateCountdown();
};