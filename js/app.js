// 1.querySelector()
var changePtag = document.querySelector('body p');
changePtag.style.fontWeight = 'Bold';
changePtag.style.color = 'Red';

// 2.querySelectorAll()
var allPtags = document.querySelectorAll('p');
for( var i=0; i<allPtags.length; i++){
    allPtags[i].style.color= 'green';
    allPtags[i].style.fontFamily = 'Arial, Helvetica, sans-serif';
}

// 3.getElementById()
var headline = document.getElementById('header');
headline.style.fontFamily = 'Arial, Helvetica, sans-serif';
headline.style.fontSize= '4em';

// 4.getElementsByClassName()

var mediumPs = document.getElementsByClassName('medium-paragraph');
for(var i=0; i<mediumPs.length; i++){
    mediumPs[i].style.border = '5px solid red';
}

// 5.getElementsByTagName
var secondheader = document.getElementsByTagName('h2');
for(i=0; i<secondheader.length; i++){
secondheader[i].style.color = 'orange';
secondheader[i].style.fontWeight = 'Bold';
secondheader[i].style.fontFamily = 'Arial, Helvetica, sans-serif';
}

// 6.createElement()
var newElement = document.createElement('h3');
var parentElement = document.getElementById('taper');
parentElement.append(newElement);
newElement.innerText += 'This is another header OMG';
newElement.style.color = 'red';

// 7.createTextNode()
var anothaone = document.createElement('h4')
parentElement.append(anothaone);
var newtext = document.createTextNode('Wow are you kidding me another header holy moly');
anothaone.append(newtext);
anothaone.style.fontFamily = 'Arial, Helvetica, sans-serif';

// 8.removeChild()
var lastItem = parentElement.firstChild;
lastItem.remove();
lastItem = parentElement.firstChild;
lastItem.remove();

// 9.classList add(), remove(), toggle();
var bigboy = document.getElementById('fatboy');
bigboy.classList.toggle('fatboysmall');





