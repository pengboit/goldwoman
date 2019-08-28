var carousel = document.getElementsByClassName('carousel-box')[0];
var btns = carousel.getElementsByTagName('i');
var imgs = carousel.getElementsByTagName('img');
var arr = ['../../image/sub1/sub1_01.jpg', '../../image/sub1/sub1_03.jpg', '../../image/sub1/sub1_05.jpg', '../../image/sub1/sub1_07.jpg',]
for (var i = 0; i < btns.length; i++){
  btns[i].onclick = function () {
    if (this.innerHTML == '') {
      right();
      }
    else{
      imgs[0].src = arr[0];
      imgs[1].src = arr[1];
      imgs[2].src = arr[2];
      var subarr = arr.pop();
      arr.unshift(subarr);
    }
  }
}
timer = setInterval(right,2300);

carousel.onmouseover = function () {
  clearInterval(timer);
}
carousel.onmouseout = function () {
  timer = setInterval(right,2300);
}

function right() {
  imgs[0].src = arr[0];
  imgs[1].src = arr[1];
  imgs[2].src = arr[2];
  var subarr = arr.shift();
  arr.push(subarr);
}

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

times = setInterval(automove,2000);

slider.onmouseover = function () {
  clearInterval(times);
}
slider.onmouseout = function () {
  times = setInterval(automove,2000);
}

// ******************************************************************************
var box = document.getElementsByClassName('place-box-right-box')[0];
var rightTit=document.getElementsByClassName('place-box-top')[0];
var leftNav = document.getElementsByClassName('place-box-left')[0];
var dts = document.getElementsByClassName('dt');
var dds = document.getElementsByClassName('dd');
var ddbox = document.getElementsByClassName('dd-box');
var dians = document.getElementsByClassName('dian');
var adds = document.getElementsByClassName('add');
var content = document.getElementsByClassName('place-box-right');
var placeNav1=document.getElementsByClassName('placeNav1')[0];
var placeNav2 = document.getElementsByClassName('placeNav2')[0];
console.log(placeNav1);
for (var i = 0; i < dts.length; i++){
  dts[i].onclick = function () {
    for (var j = 0; j < ddbox.length; j++){
      ddbox[j].className = 'dd-box';
      dts[j].className = "dt";
      dians[j].className = "dian";
      adds[j].innerHTML = '&#xe632;';
    }
    var ddarr = this.nextElementSibling.className = 'dd-box active';
    this.className = "active dt";
    this.lastElementChild.className = "active dian";
    this.firstElementChild.nextElementSibling.innerHTML = '&#xe64e;';
  }
}

for (var i = 0; i < dds.length; i++){
dds[i].onclick = function () {
    for (var j = 0; j < dds.length; j++){
      dds[j].className = "dd";
      content[j].className = 'place-box-right fr';
    }
  this.className = "active dd";
  var nth = this.getAttribute('dy');
  content[nth - 1].className = 'place-box-right fr active';
  placeNav2.innerHTML = this.innerHTML;
  placeNav1.innerHTML = this.parentNode.previousElementSibling.firstElementChild.innerHTML;
  }
}

