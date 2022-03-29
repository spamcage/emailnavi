var techId = document.getElementById('tech');
var tech = [
    'techcrunch.com',
    'TechCrunch',
    'Discord',
    'www.cs.oberlin.edu/~kuperman/help/vim/',
    'Vim'
];
for (var i = 0; i < tech.length; i = i + 2) {
    techId.innerHTML +=
        '<a target="_blank" href="https://' +
        tech[i] +
        '">' +
        tech[i + 1] +
        '</a> &sdot; ';
}

var usefulId = document.getElementById('useful');
var useful = [
    'https://ask.com',
    'Ask',
    'https://answers.com',
    'Answers',
    'Kialo',
    'http://www.gematrinator.com/calculator/index.php',
    'Gematrinator'
];
for (var i = 0; i < useful.length; i = i + 2) {
    usefulId.innerHTML +=
        '<a target="_blank" href="' +
        useful[i] +
        '">' +
        useful[i + 1] +
        '</a> &sdot; ';
}

var trendsId = document.getElementById('trends');
var trends = [
    'ted.com',
    'Ted',
    'salon.com',
    'Cambridge Analytica'
];
for (var i = 0; i < trends.length; i = i + 2) {
    trendsId.innerHTML +=
        '<a target="_blank" href="https://' +
        trends[i] +
        '">' +
        trends[i + 1] +
        '</a> &sdot; ';
}

var funnyId = document.getElementById('funny');
var funny = [
    '9gag.com',
    '9gag',
    'funnyordie.com',
    'Funny Or Die',
    'Me.me'
];
for (var i = 0; i < funny.length; i = i + 2) {
    funnyId.innerHTML +=
        '<a target="_blank" href="https://' +
        funny[i] +
        '">' +
        funny[i + 1] +
        '</a> &sdot; ';
}

var weirdId = document.getElementById('weird');
var weird = [
    'https://4chan.org',
    '4chan',
    'https://imgur.com',
    'Imgur',
    'The End of Internet'
];
for (var i = 0; i < weird.length; i = i + 2) {
    weirdId.innerHTML +=
        '<a target="_blank" href="' +
        weird[i] +
        '">' +
        weird[i + 1] +
        '</a> &sdot; ';
}
var tempmailId = document.getElementById('tempmail');
var tempmail = [
    'https://mail.td',
    'Mail.td',
    'https://imgur.com',
    'Imgur',
    'https://nerdist.com',
    'Nerdist',
    'The End of Internet'
];
for (var i = 0; i < tempmail.length; i = i + 2) {
    tempmailId.innerHTML +=
        '<a target="_blank" href="' +
        tempmail[i] +
        '">' +
        tempmail[i + 1] +
        '</a> &sdot; ';
}


var elem2 = document.getElementById('top2');
data2 = [];

for (var i in data2) {
    elem2.innerHTML += `<a target="_blank" href="https://${data2[i][0]}" >
        <img src=${data2[i][1]} title="Go to <span>#${parseInt(i) +
        234}</span><p><img src=${data2[i][1]}><p>${
        data2[i][0]
        }" alt="fulck" onerror="replaceImg(this)" />
    </a>`;
}

tippy('img', {
    delay: 100,
    arrow: true,
    size: 'large',
    duration: 500,
    animation: 'shift-away',
    placement: 'right',
    theme: 'fulck'
});

let moon = document.querySelector('#mode').innerHTML;
let logo = document.querySelector('.logo').style.backgroundImage;

document.querySelector('#mode').addEventListener('click', function () {
    this.innerHTML = this.innerHTML == moon ? '&#9788;' : moon;
    document.querySelector('.logo').style.backgroundImage =
        document.querySelector('.logo').style.backgroundImage == logo
            ? 'url("logo-white.svg")'
            : logo;

    document.querySelector('body').classList.toggle('night');
    document.querySelector('.lista').classList.toggle('night');
    document.querySelectorAll('.lista img').forEach(el => {
        //el.classList.toggle('night-border');
        //el.style.height = '1em';
    });
});

document.querySelector('#abc').addEventListener('click', function () {
    data.sort((a, b) => a[0].localeCompare(b[0]));

    elem.innerHTML = '';
    for (var i in data) {
        elem.innerHTML += `<a class="${data[i][3] == 'adult' &&
            'adult hide'}" target="_blank" href="https://${data[i][0]}" >
        <img src=${data[i][1]} alt="fulck" onerror="replaceImg(this)" />
    </a>`;
    }
});
