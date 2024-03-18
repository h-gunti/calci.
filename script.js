/*Mode changing*/
let mode = document.querySelector("#mode");
let body =  document.querySelector("body");
let currMode = "light";
let image = document.getElementById("toggle");

mode.addEventListener("click",()=>
{
    if(currMode == "light")
    {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        image.src = 'images/toggle-moon.png';
    }
    else
    {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        image.src = 'images/toggle-sun.png';
    }
});
/*Calculator functionality*/ 
let display = document.querySelector('#display');
let btn1 = document.querySelectorAll('.btn');
btn1.forEach(element => {
    element.addEventListener('click', (e) =>
    {
        btntext=e.target.innerText;
        if(btntext=="÷")
        {
            btntext='/';
        }
        else if(btntext=="x")
        {
            btntext='*';
        }
        display.value=display.value+btntext;
    })
});
function sin()
{
   display.value=Math.sin(display.value);
}
function cos()
{
    display.value=Math.cos(display.value);
}
function tan()
{
    display.value=Math.tan(display.value);
}
function backSpace()
{
    var a=display.value;
    display.value = a.substr(0,a.length-1);
}
function power2()
{
    display.value= Math.pow(display.value,2);
}
function power3()
{
    display.value= Math.pow(display.value,3);
}
function cl()
{
    var a=display.value;
    display.value = a.substr(0,0);
}
function fact()
{
    var a=display.value;
    var x=1;
    for(let i=2;i<=a;i++)
    {
        x=x*i;
    }
    display.value=x;
}
function sqrt()
{
    display.value=Math.pow(display.value,1/2);
}

function equals()
{
    display.value = eval(display.value);
}
function perc()
{
    var a= display.value.substr(0,display.value.length-1);
    display.value=a/100;
}
function pi()
{
    display.value=Math.PI;
}
function log()
{
    display.value=Math.log(display.value);
}
