// a)Print odd number in array
let a = function() {
    let arr1 = [1,2,3,4,5]
    for (i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2!==0)
        console.log(arr1[i]);
    }
};
a();

// b)Convert all the strings to title caps in a string array
let b = function(){
    let str = "guvi geeks";
    str=str.toLowerCase().split(" ");
    for(i=0;i<str.length;i++)
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    console.log(str.join(" "));
};
b();

// c)Sum of all numbers in an array
let c = function(){
    let arr=([1,2,3,4,5])
    sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    console.log(sum);
};
c();  

// d)Return all the prime numbers in an array

let d=function(arr) {
    for(i=0;i<arr.length;i++)
    {
    let prime=true;
    for(j=2;j<arr[i];j++)
    {
        if(arr[i]%j==0) {
            console.log(arr[i])
            prime=false;
            break;
        }
    }
    if(prime)
    {
        console.log(arr[i] );
    }
    }
};
d([4,11,5,13,15]);

// e)Return all the palindromes in an array
let e=function(arr) {
    for(i=0;i<arr.length;i++)
    {
        temp=arr[i];
        r=0;
        sum=0;
        while(temp>0)
        {
            r=temp%10;
            sum=sum*10+r;
            temp=parseInt(temp/10);
           
        }
        if(arr[i]==sum)
        console.log(sum);
    }
};
e([121,453,565,234]);

// g)Remove duplicates from an array
let g=function(arr1) {
    for(i=0;i<arr1.length;i++)
    {
        dupl=false;
        for(j=i+1;j<arr1.length;j++)
        {
            if(arr1[i]===arr1[j])
            {
                dupl=true;
            }
        }
        if(!dupl)
        {
            arr2.push(arr1[i]);
        }
    }
    console.log(arr2);
}
let arr2=[];
let arr=[1,6,1,2,3,5,1];
g(arr);

(function(arr1){
    let arr2=[];
    for(i=0;i<arr1.length;i++)
    {
        dupl=false;
        for(j=i+1;j<arr1.length;j++)
        {
            if(arr1[i]===arr1[j])
            {
                dupl=true;
            }
        }
        if(!dupl)
        {
            arr2.push(arr1[i]);
        }
    }
    console.log(arr2);
}([1,2,3,4,2,5,6,2,1]))

// 3)
// a)Print odd numbers in an array
let h=()=>{
    let arr1=[1,2,3,4,5]
    for(i=0;i<arr1.length;i++)
    {
        if(arr1[i]%2!==0)
        console.log(arr1[i]);
    }
};
h();

// b)Convert all the strings to title caps in a string array
let k=()=>{
    let str="guvi geeks";
    str=str.toLowerCase().split(" ");
    for(i=0;i<str.length;i++)
    str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    console.log(str.join(" "));
};
k();

// c)Sum of all numbers in an array
let l=()=>{
    let arr=([1,2,3,4,5])
    sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    console.log(sum);
};
l();

// d)Return all the prime numbers in an array
let m=(arr)=>{
    for(i=0;i<arr.length;i++)
    {
        let prime=true;
        for(j=2;j<arr[i];j++)
        {
            if(arr[i]%j==0){
                console.log(arr[i])
                prime=false;
                break;
            }
        }
        if(prime)
        {
            console.log(arr[i]);
        }
}
};
m([4,11,5,13,15]);

// e)Return all the palindromes in an array
let n=(arr)=>{
    for(i=0;i<arr.length;i++)
    {
        temp=arr[i];
        r=0;
        sum=0;
        while(temp>0)
        {
            r=temp%10;
            sum=sum*10+r;
            temp=parseInt(temp/10);
        }
        if(arr[i]==sum)
        console.log(sum);
    }
};
n([121,453,565,234]);







