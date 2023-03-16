let body=document.querySelector("body");
let displayinput=document.getElementById("result")
let expdisp=document.getElementById("exp")
let inputpad= document.querySelector(".input");
let bracess= document.getElementById("bracess");
let addsub=document.getElementById("addsub");
let numberpad= document.querySelector(".numberpad");
let zero=document.getElementById("zero")
let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let four=document.getElementById("four")
let five=document.getElementById("five")
let six=document.getElementById("six")
let seven=document.getElementById("seven")
let eight=document.getElementById("eight")
let nine=document.getElementById("nine")
let clr=document.getElementById("clear")
let fr=0;
// let add=document.getElementById("add")


// console.log(zero.value);
// console.log(one.value);
// console.log(two.value);
// console.log(three.value);
// console.log(four.value);
// console.log(five.value);
// console.log(six.value);
// console.log(seven.value);
// console.log(eight.value);
// console.log(nine.value);

console.log(typeof Number(nine.value));
console.log( eval("3%2") );



let n1=Number(nine.value+one.value+two.value);
let n2 =Number(nine.value+one.value);
console.log(n1);
console.log(n2);

function compute ()
{
    console.log(n1+n2);
}

compute()

let expression='';
expdisp.value=0;

function f0()
{
    console.log(zero.value);
    expression=expression+zero.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function f1()
{
    console.log(one.value);
    expression=expression+one.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function f2()
{
    console.log(two.value);
    expression=expression+two.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function f3()
{
    console.log(three.value);
    expression=expression+three.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function f4()
{
    console.log(four.value);
    expression=expression+four.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function f5()
{
    console.log(five.value);
    expression=expression+five.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function f6()
{
    console.log(six.value);
    expression=expression+six.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function f7()
{
    console.log(seven.value);
    expression=expression+seven.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}
function f8()
{
    console.log(eight.value);
    expression=expression+eight.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function f9()
{
    console.log(nine.value);
    expression=expression+nine.value;
    expdisp.value=expression;
    console.log("expression="+expression);
}

function add()
{
    expression=expression+"+";
    expdisp.value=expression;
  console.log(expression);
}

function add()
{
    expression=expression+"+";
    expdisp.value=expression;
  console.log(expression);
}
function sub()
{
    expression=expression+"-";
    expdisp.value=expression;
  console.log(expression);
}
function multiplication()
{
    expression=expression+"*";
    expdisp.value=expression;
  console.log(expression);
}
function division()
{
    expression=expression+"/";
    expdisp.value=expression;
  console.log(expression);
}
function mod()
{
    expression=expression+"%";
    expdisp.value=expression;
  console.log(expression);
}

function dot()
{
    expression=expression+".";
    expdisp.value=expression;
  console.log(expression);
}




function equals()
{
    fr= eval(expression)
    displayinput.value=fr;
    console.log(fr);
}

function eraseexp()
{
    expression='';
    displayinput.value=0;
    expdisp.value=expression;
    console.log("expression deleted");

}

function deletelast()
{
    expression =expression.slice(0, -1);
    expdisp.value=expression;
    console.log(expression);
    // console.log(r);
}

// below code working correctly for () it is  not working for (())
function braces()
{
    if(bracess.value=="(")
    {
        expression=expression+"(";
        expdisp.value=expression;
        console.log(expression);
       bracess.value=")";
        console.log("braces after one click "+bracess.value);
    }
    else
    {
        expression=expression+")";
        expdisp.value=expression;
        console.log(expression);
        bracess.value="("
        console.log("braces after one click "+bracess.value);
    }
}


// below code working partially
function plusminus()
{
    if(addsub.value=="-a")
    {
        if(expression==0 || fr==0)
        {
            expression=expression;
            fr=fr;
            addsub.value=="a"
            expdisp.value=expression;
            console.log(expression);
        }
        else
        {
            expression=-expression;
            fr=-fr;
            addsub.value=="a"
            expdisp.value=expression;
            console.log(expression);
        }
        
    }
    else
    {
        if(expression==0 || fr==0)
        {
            expression=expression;
            fr=fr;
            addsub.value=="-a"
            expdisp.value=expression;
            console.log(expression);
        }
       else
       {
        expression=-(-expression);
        fr=-(-fr);
        addsub.value=="-a"
        expdisp.value=expression;
        console.log(expression);
       }
    }

}



let ps= document.getElementById("addsub")
function plusminus1()
{
    if(ps.innerText=="+")
    {
        expression= "+"+expression;
        expdisp.value=expression;
        console.log("+ prependded");
        ps.innerText="-"
    }
    else
    {
        expression= expression.substring(1)
        console.log(expression+"     in else block,........................");
        expression= "-"+expression;
        expdisp.value=expression;
        console.log("- prependded");
        ps.innerText="+"
    }
}
















































































// let body=document.querySelector("body");
// let one=document.querySelector("#one")
// let two=document.querySelector("#two")
// let sum=document.querySelector("#sum")
// let disp=document.querySelector("#disp")
// let input=document.createElement("input");

// let res;
// console.log(one.value);
// console.log(two.value);
// // let a= one.value;
// // let b=two.value;

// function addition()
// {
//     res=one.value + two.value
//     console.log(res);
//     input.value=res;
// }

// addition()
// console.log(1+2);


