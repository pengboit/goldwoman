var slider = document.getElementsByClassName('slider')[0];
var btns = slider.getElementsByTagName('i');
var imgs = slider.getElementsByTagName('img');
var ul = slider.getElementsByTagName('ul')[0];
var lis = ul.getElementsByTagName('li');
j = 1;
for (var i = 0; i < btns.length; i++){
  btns[i].onclick = function () {
    if (this.innerHTML == '') {
      
      
      btnr();
    }
    else {
      j--;
      if (j == 0) {
        j = 3;
      }
      for (var i = 1; i < imgs.length; i++){
        imgs[i].className = '';
        lis[i-1].className = '';
      }
      imgs[j].className = 'active';
      lis[j-1].className = 'active';
    }
  }
}

function btnr() {
  j++;
  if (j == 4) {
    j = 1;
  }
      for (var i = 1; i < imgs.length; i++){
        imgs[i].className = '';
        lis[i-1].className = '';
      }
      imgs[j].className = 'active';
      lis[j-1].className = 'active';
      }
    

for (var i = 0; i < lis.length; i++){
  lis[i].onclick = function () {
    for (var i = 1; i < imgs.length; i++) {
      imgs[i].className = '';
      lis[i - 1].className = '';
    }
    j = this.getAttribute('dy');
    imgs[j].className = 'active';
    lis[j - 1].className = 'active';
  }
} 

timer = setInterval(btnr, 2000);
slider.onmouseover = function () {
  clearInterval(timer);
}
slider.onmouseout = function () {
  timer=setInterval(btnr, 2000);
} 


