// ************************************************************
var slider = document.getElementsByClassName('bigpic')[0];
var lis = slider.getElementsByTagName('li');
var pics = slider.getElementsByTagName('img');
for (var i = 0; i<lis.length; i++){
  lis[i].onclick = function () {
    for (var i = 0; i < lis.length; i++){
      lis[i].className = '';
      pics[i+1].className = '';
    }
    this.className = 'active';
    j = this.getAttribute('dy');
    pics[j].className = 'active';
  }
}
var rightbtn = slider.getElementsByTagName('button')[0];
j = 1;
rightbtn.onclick = function () {
  automove();
}

function automove() {
  j++;
  for (var i = 0; i < lis.length; i++){
    lis[i].className = '';
    pics[i+1].className = '';
  }
  if (j == 5) {
    j = 1;
  }
  lis[j-1].className = 'active';
  pics[j].className = 'active';
}

times = setInterval(automove,2500);

slider.onmouseover = function () {
  clearInterval(times);
}
slider.onmouseout = function () {
  times = setInterval(automove,2500);
}

// ******************************************************************************
var box = document.getElementsByClassName('place-box-right');
var rightTit=document.getElementsByClassName('place-box-top')[0];
var leftNav = document.getElementsByClassName('place-box-left')[0];
var dts = document.getElementsByClassName('dt');
var ddbox = document.getElementsByClassName('dd-box');
var dians = document.getElementsByClassName('dian');
var adds = document.getElementsByClassName('add');
var placeNav2 = document.getElementsByClassName('placeNav2')[0];

for (var i = 0; i < dts.length; i++){
  dts[i].onclick = function () {
    for (var i = 0; i < dts.length; i++){
      dts[i].className = "dt";
      dians[i].className = "dian";
      adds[i].innerHTML = '&#xe632;';
      box[i].className = "place-box-right";
    }
    this.className = "active dt";
    this.lastElementChild.className = "active dian";
    this.firstElementChild.nextElementSibling.innerHTML = '&#xe64e;';
    placeNav2.innerHTML = this.firstElementChild.innerHTML;
    var a = this.getAttribute('dy');
    box[a].className = "place-box-right active";
  }
}
