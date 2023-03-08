function add(a,b)
{
    return a+b;
}

function subtract(m,n)
{
    return m-n;
}

function multiply(p,q)
{
    return p*q;
}

function divide(x,y)
{
    return x/y;
}

let ad=add(10,20);
console.log(ad)
let sb=subtract(30,23);
console.log(sb);
let mt=multiply(15,18);
console.log(mt);
let dv=divide(42,7);
console.log(dv);


const bj=function(a,b){
    return a+b;
}
const vj=function(a,b)
{
    return a-b;
}

const gk=function(m,n)
{
    return m-n;
}

const bk=function(p,q)
{
    return p*q;
}

let x=add(10,20);
console.log(x)
let y=subtract(30,23);
console.log(y);
let z=multiply(15,18);
console.log(z);
let l=divide(42,7);
console.log(l);



let fun1=(m,n)=>{
    return m+n;
}

let e=fun1(10,20);
console.log(e);

let fun2=(a,b)=>{
    return a-b;
}

let f=fun2(10,20);
console.log(f);


let fun3=(p,q)=>{
    return p*q;
}

let g=fun3(15,18);
console.log(g);

let fun4=(x,z)=>{
    return x/z;
}

let h=divide(42,7);
console.log(h);

// let a=35;
// let b=35;

// if(a>b){
//     console.log('a is greater than b');
// }
// else if(a<b)
// {
//     console.log('a is less than b');
// }
// else{
//     console.log('a is equals to b');
// }

// c>a?console.log('i dont know')console.log('c is equals to a')

let a=20;
let b=20;
let c=25;

// -------- AND --------

if(a>b && a>c)
{
    console.log('a is greatest number');
}

else if(a<b && a<c)
{
    console.log('a is smallest number');
}

else{
    console.log('a is neither gretest nor smallest number');
}

c>a && c>b? c<b && c<a?console.log('c is greatest'):console.log('c is smallest'):console.log('dont know')

// ------ OR ---------

if(a>b | a>c)
{
    console.log('a is not smallest');
}
else if(a<b | a<c)
{
    console.log('a is not greatest');
}
else{
    console.log('cannot be said');
}

c>a | c>b? c<b | c<a?console.log('c might be greatest'):console.log('c can be smallest'):console.log('dont know')

