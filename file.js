const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')

// box1.style.backgroundColor = 'lightpink'

function changeColor (element,color){
   element.style.backgroundColor = color
}
changeColor(box1 ,'lightpink');
changeColor(box3 , 'lightgreen')
changeColor(box2 , 'lightblue')
changeColor(document.body,' rgb(152, 203, 180)')
