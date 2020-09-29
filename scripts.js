function navbarToggle() {
    document.getElementById('navbar-items').classList.toggle("hidden");
}

if (document.readyState != 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function ready() {
    const header_preloader = document.getElementById("header-preloader");
    const lds_css = document.getElementsByClassName("lds-css");
    const preloader = document.getElementById("preloader");

    setTimeout(function(){
        $("#header-preloader").fadeIn(500);
        $(".lds-css").fadeIn(500);
    }, 500);
    setTimeout(function(){
        $("#header-preloader").fadeTo(300, 0);
        $(".lds-css").fadeTo(300, 0);
    }, 1800);
    setTimeout(function(){
        $(".preloader").fadeTo(200, 0);
    }, 2200);
    setTimeout(function(){
        preloader.classList.add('none');
        preloader.classList.remove('z-20');
        document.body.classList.remove("overflow-hidden");
    }, 2500);


    ScrollReveal().reveal('.reveal', { delay: 2500 });

    ScrollReveal().reveal('.title', { delay: 250, origin: 'left', distance: '8em' });
    ScrollReveal().reveal('.icons', { delay: 230, origin: 'right', distance: '8em' });
    ScrollReveal().reveal('.card', { delay: 200, origin: 'right', distance: '8em' });
    ScrollReveal().reveal('.fa-github', { delay: 650, origin: 'bottom', distance: '6em' });
    ScrollReveal().reveal('.fa-codepen', { delay: 800, origin: 'bottom', distance: '6em' });
    ScrollReveal().reveal('.fa-free-code-camp', { delay: 950, origin: 'bottom', distance: '6em' });

    
}
/*
function makeXhrRequest(method, url, data, callback) {
    let xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            callback(this.response);
        }
    };

    xhr.open(method, url);
    xhr.send(data);
};


function requestData(method, url, data) {
    return new Promise( function(resolve, reject) {
        let xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                resolve(this.response);
            }
        };

        xhr.open(method, url);
        xhr.send(data);
    });
}


function parseSheetsData(response) {
    return new Promise( function (resolve, reject) {
        let data = JSON.parse(response);
        let entries = data.feed.entry;

        let table = [];

        entries.forEach(entry => {
            let row = entry.gs$cell.row - 1;
            let col = entry.gs$cell.col - 1;

            if (table[row] === undefined) {
                table[row] = [];
            }

            table[row][col] = entry.gs$cell.inputValue;
        });

        let keys = table.shift();

        let assoc = table.map( function(arr) {
            let obj = {};
            keys.forEach(function(key, index) {
                obj[key] = arr[index];
            });
            return obj;
        });

        resolve(assoc);
    });
}

requestData("GET", "https://spreadsheets.google.com/feeds/cells/1YP5Sh91TWkzv3mKiDi32t8RMs_lc8Y4qAjsEji9hNoM/1/public/full?alt=json", '')
        .then(parseSheetsData)
        .then(function(val) {
            var app = new Vue({
                el: '#app',
                data: {
                    cards: val
                }
            });
        });*/