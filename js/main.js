var row=document.body.querySelector(".row");

var cards=[
    {
        url:"https://rukminim1.flixcart.com/image/612/612/l58iaa80/electric-cycle/i/y/f/-original-imagfykthgudy4qz.jpeg?q=70",
        title:"Nuze i3 27.5 inches Single Speed Lithium-ion (Li-ion) Electric Cycle",
        rating:"4.2",
        amount:"Rs.28,174",
    },
    {
        url:"https://rukminim1.flixcart.com/image/612/612/xif0q/electric-cycle/g/a/0/meraki-27-5t-single-speed-electric-bicycle-black-red-black-red-original-imagkqs9jgrpdcrn.jpeg?q=70",
        title:"Ninety one Meraki 27.5T Single Speed Electric Bicycle- ...",
        rating:"4.3",
        amount:"Rs.21,400",
    },
    {
        url:"https://rukminim1.flixcart.com/image/612/612/xif0q/electric-cycle/v/o/m/meraki-s7-29t-with-shimano-gear-matt-blue-matt-blue-18-5-ninety-original-imagkrnzcp4nv64r.jpeg?q=70",
        title:"Ninety one Meraki S7 29T with Shimano Gear - Matt Blue ...",
        rating:"4.7",
        amount:"Rs.26,379",
    },
    {
        url:"https://rukminim1.flixcart.com/image/612/612/xif0q/electric-cycle/e/3/d/meraki-ultra-27-5t-7-speed-electric-cycle-with-shimano-acera-original-imagkqt2yzmdh6bq.jpeg?q=70",
        title:"Ninety one Meraki Ultra 27.5T 7 Speed Electric Cycle wi...",
        rating:"4.4",
        amount:"Rs.30,420",
    },
    {
        url:"https://rukminim1.flixcart.com/image/612/612/kr58yvk0/electric-cycle/3/b/u/c5e-black-blue-18-hero-lectro-single-speed-original-imag4zy9z37qmy9y.jpeg?q=70",
        title:"Hero Lectro C5E 27.5 inches Single Speed Lithium-ion (L...",
        rating:"4.2",
        amount:"Rs.23,400",
    },
    {
        url:"https://rukminim1.flixcart.com/image/612/612/kr58yvk0/electric-cycle/b/h/y/c6e-black-orange-18-5-hero-lectro-7-gear-original-imag4zy9ukkykbyf.jpeg?q=70",
        title:"Hero Lectro C6E 700C inches 7 Gear Lithium-ion (Li-ion)...",
        rating:"4.5",
        amount:"Rs.32,299",
    },
    {
        url:"https://rukminim1.flixcart.com/image/612/612/l3bx5e80/electric-cycle/q/7/h/-original-imagegxt4xmhkc4c.jpeg?q=70",
        title:"Ninety one Spectre R7 700C inches 7 Gear Lithium-ion ",
        rating:"4.3",
        amount:"Rs.28,544",
    },
    {
        url:"https://rukminim1.flixcart.com/image/612/612/xif0q/electric-cycle/s/o/x/meraki-ultra-27-5t-with-7-speed-shimano-acera-gear-matt-black-original-imagkquywkat8zn4.jpeg?q=70",
        title:"Ninety one Meraki Ultra 27.5T with 7 Speed Shimano Acer...",
        rating:"4.2",
        amount:"Rs.22,700",
    }
]

cards.forEach(function(x){
var card=document.createElement("div");
card.classList.add("card");
var img=document.createElement("div");
img.classList.add("img");
var image=document.createElement("img");
image.src=x.url;
img.appendChild(image);
card.appendChild(img);
var con=document.createElement("div");
con.classList.add("content");
var t=document.createElement("h3");
t.innerHTML=x.title;
var r=document.createElement("h4");
r.innerHTML=x.rating;
var a=document.createElement("p");
a.innerHTML=x.amount;
var ac=document.createElement("a");
ac.innerHTML="+ Add Cart";
con.appendChild(t);
con.appendChild(r);
con.appendChild(a);
con.appendChild(ac);
card.appendChild(con);
row.appendChild(card);
})

var ac=row.querySelectorAll("a");
var cart=document.querySelector(".cart");
ac.forEach(function(x){
x.addEventListener("click",function(e){
    var ce=e.target;
    ce.classList.add("hide");
    var card1=document.createElement("div");
    card1.classList.add("card1");
    var item=ce.parentNode.parentNode.innerHTML;
    card1.innerHTML=item;
    cart.appendChild(card1);
    var cc=card1.querySelector(".content");

    var side=document.createElement("div");
    var ip=document.createElement("input");
    ip.setAttribute("value","1");
    var decrement=document.createElement("button");
    decrement.innerText="-";
    decrement.classList.add("bn1");
    decrement.addEventListener("click",function(){
    if(ip.value>0){
        --(ip.value);
    }
    })
    var increment=document.createElement("button");
    increment.innerText="+";
    increment.classList.add("bn2");
    increment.addEventListener("click",function(){
        ++(ip.value);
    })
    
    side.appendChild(decrement);
    side.appendChild(ip);
    side.appendChild(increment);
    var remove=document.createElement("button");
    remove.innerHTML="Remove"
    cc.appendChild(side);
    cc.appendChild(remove);
})
})

var car=document.querySelector(".car");
var items=document.querySelector(".items");
var c=document.querySelector(".cart-item");
car.addEventListener("click",function(){
    c.classList.remove("hide");
    items.classList.add("hide");
})
