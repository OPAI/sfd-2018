"use strict";

function startCountdown() {
    var countDownDate = new Date("Sep 15, 2018").getTime();
    var countdownElement = document.querySelector("#countdown");
    var updateCountdown = function updateCountdown() {
        var evaluate = function evaluate(value) {
            return value < 10 ? "0" + value : value;
        };

        // Find the distance between now an the count down date
        var distance = countDownDate - Date.now();

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));

        // Display the result in the element with id="demo"
        countdownElement.innerHTML = "Faltam\n            <span class=\"clock\">" + evaluate(days) + "</span> dia" + (days == 1 ? '' : 's') + ", \n            <span class=\"clock\">" + evaluate(hours) + "</span> hora" + (hours == 1 ? '' : 's') + " e \n            <span class=\"clock\">" + evaluate(minutes) + "</span> minuto" + (minutes == 1 ? '' : 's') + " para o evento";

        // If the count down is finished, write some text 
        if (distance <= 0) {
            intervalControl && clearInterval(intervalControl);
            countdownElement.innerHTML = "O evento começou! Aproveite!";
        }
    };

    var intervalControl = setInterval(updateCountdown, 60000);
    updateCountdown();
}
function scrollToItem(item) {
    var navHeight = 55;
    var diff = (item.offsetTop - window.scrollY - navHeight) / 20;

    if (!window._lastDiff) {
        window._lastDiff = 0;
    }

    if (Math.abs(diff) > 0) {
        window.scrollTo(0, window.scrollY + diff);
        clearTimeout(window._TO);

        if (diff !== window._lastDiff) {
            window._lastDiff = diff;
            window._TO = setTimeout(scrollToItem, 15, item);
        }
    } else {
        window.scrollTo(0, item.offsetTop - navHeight);
    }
}
window.onload = function () {
    var opener = document.querySelector("#opener");
    var closer = document.querySelector("#closer");
    var menu = document.querySelector('.menu');

    opener.addEventListener('click', function (event) {
        return menu.classList.add('active');
    });
    closer.addEventListener('click', function (event) {
        return menu.classList.remove('active');
    });

    //Starts Countdown
    startCountdown();

    //Smooth Scroll Config
    document.querySelectorAll('.link-to').forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            menu.classList.remove('active');
            scrollToItem(document.querySelector(element.href.substring(element.href.lastIndexOf('#'))));
        });
    });
};
//# sourceMappingURL=script.js.map
