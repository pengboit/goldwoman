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
var j = 1;
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
