const button=document.querySelector('button');
const body=document.querySelector('body');
const colors=['#FF7F50','#808000','#454545','#800000','pink','purple','#222f3e',"grey",'#f368e0','#F0E68C','#3CB371'];


body.style.backgroundColor='black';
button.addEventListener('click',change);

function change(){
    const colorIndex=parseInt(Math.random()*colors.length+1);
    body.style.backgroundColor=colors[colorIndex];
}