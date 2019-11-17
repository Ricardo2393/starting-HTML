var heading=document.getElementById('head');
var input=document.querySelector('input');
var cut=document.querySelector('h3');
var cubo=document.getElementById('image')
var cont=document.querySelector('p');
var count=document.getElementById('count')
var password="blanco";
var button=document.querySelector('button')
/*heading.style.textTransform='uppercase';*/

button.addEventListener('click',function(){
    if (input.value===password){
        count.textContent=0;
        cubo.style.display='block';
        cubo.style.backgroundColor='#00963e';        
        cont.style.display='block';
        cut.textContent='Xa mostro';
        var sum=0;
        cubo.addEventListener('click',function(){
            sum+=1;
            count.textContent=sum;
        });
    }
    else if ((input.value).includes(password)){
        cubo.style.backgroundColor='#f7fa14';
        cubo.style.display='block';
        cut.textContent='Vas por ahi';
        contador.style.display= "none";
    }
    else{
        cubo.style.backgroundColor='#ff0e05';
        cubo.style.display='block';
        cut.textContent='Tas pa los Perros';
        cont.style.display= "none";
    }
});