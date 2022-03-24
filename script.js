var elem = document.getElementById("top1");

function replaceImg(img) {
  return (img.src = "logo.svg");
}

for (var i in data) {
  elem.innerHTML += `<a class="${data[i][3] == "adult" &&
    "adult hide"}" target="_blank" href="https://${data[i][0]}" >
        <img src=${
          data[i][1]
        } title="<div style='padding: 12px; border: 1px solid #aaa;'> Go to <span>#${parseInt(
    i
  ) + 1}</span>
    <p><img src=${data[i][1]}><p> 
    <p style='font-weight: 100; color: darkslategrey; margin: .8em 0; padding: 3px; background: #eee;'>
    ${data[i][2] || "Description available soon&hellip;"}
    </p>
    <span style='font-size: 1.5em; color: darkslategrey;'>${
      data[i][0]
    }</style></div>" alt="fulck" onerror="replaceImg(this)" />
    </a>`;
}

tippy("img", {
  delay: 100,
  arrow: true,
  size: "large",
  duration: 500,
  animation: "shift-away",
  placement: "right",
  theme: "fulck"
});

document.getElementById("goo").value = "All the Top Websites in One Place";

var losujPole = function() {
  var loso = Math.round(Math.random() * data.length);
  document.getElementById("goo").value = " " + data[loso][0];
  document
    .getElementById("submit")
    .setAttribute("title", `Go to ${data[loso][0]}`);
};
var losuje = setInterval(losujPole, 2500);

function search() {
  window.location =
    "https://google.com/search?&q=" + document.getElementById("goo").value;
}

document.getElementById("goo").addEventListener("focus", function() {
  clearInterval(losuje);
  document.getElementById("goo").value = "";
  document.getElementById("submit").removeAttribute("title");
});

document.getElementById("goo").addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    search();
  }
});
