
Shery.mouseFollower();
 Shery.hoverWithMediaCircle(".hvr",{images:["./invert.jpg","./invertles.jpg","./harminvert.jpg"]})

 var products=[
    {image:"./stratfender-removebg-preview.png",name:"Fender Stratocaster",price:"₹47,000"},
    {image:"./ibanez1.png",name:"Ibanez Rock",price:"₹47,000"},
    {image:"./newenstrat.jpeg",name:"Newen Strat",price:"₹47,000"},
    {image:"./stratfender-removebg-preview.png",name:"Fender Strat",price:"₹47,000"}
]

var acoustics=[
    {image:"./actaylor.jpg",name:"Taylor Acoustica",price:"₹12,000"},
    {image:"./acibanez.jpg",name:"Ibanez Acoustic",price:"₹21,000"},
    {image:"./acmaconnel.jpg",name:"Maconnel Acoustic",price:"₹19,000"},
    {image:"./fendertele-removebg-preview.png",name:"Fender Telecaster",price:"₹57,000"}
]


var harmoniums=[
    {image:"./harmoniuncard.jpg",name:"Harmonium 1",price:"₹10,000"},
    {image:"./harmoniuncard2.png",name:"Harmonium 2",price:"₹14,000"},
    {image:"./harmoniuncard3.jpg",name:"Harmonium 3",price:"₹11,000"}
]
 
var cart=[];
function addProduct(){
    var clutter="";
products.forEach(function(product,index){
    clutter+=`<div id="mycard" class="swiper-slide">
    <img id="cardpic" src="${product.image}" alt="">
    <h5>${product.name}</h5>
    <h6>${product.price}</h6>
    <button data-index="${index}" type="button" class=" addo btn btn-primary">Add to Cart</button>
</div>`
})
document.querySelector("#mycards").innerHTML=clutter;
}

function addacProduct(){
    var clutter="";
acoustics.forEach(function(product,index){
    clutter+=`<div id="mycard">
    <img id="cardpic" src="${product.image}" alt="">
    <h5>${product.name}</h5>
    <h6>${product.price}</h6>
    <button data-index="${index}" type="button" class="aryan1 btn btn-primary">Add to Cart</button>
</div>`
})
document.querySelector(".adjust1").innerHTML=clutter;
}

function addnewProduct(){
    var clutter="";
harmoniums.forEach(function(harmonium,index){
    clutter+=`<div id="harmcard">
    <img class="harmimg" src="${harmonium.image}" alt="">
    <h5>${harmonium.name}</h5>
    <h6>${harmonium.price}</h6>
    <button data-index="${index}" type="button" class="aryan btn btn-primary">Add to Cart</button>
</div>
</div>`
})
document.querySelector(".harmcards").innerHTML=clutter;
}

function addTonewCart(){
    document.querySelector(".harmcards").addEventListener("click",
    function(details){
        if(details.target.classList.contains('aryan')){
            cart.push(harmoniums[details.target.dataset.index])
        };
    })
}
function addToacCart(){
    document.querySelector(".adjust1").addEventListener("click",
    function(details){
        if(details.target.classList.contains('aryan1')){
            cart.push(acoustics[details.target.dataset.index])
        };
    })
}

function addToCart(){
    document.querySelector("#mycards").addEventListener("click",
    function(details){
        if(details.target.classList.contains('addo')){
            cart.push(products[details.target.dataset.index])
        };
    })
}

function closecart(){
    document.querySelector('#cartclose').addEventListener("click",function(){
        document.querySelector("#cart").style.display="none";
    })
}

function showCart(){
    document.querySelector("#carticon")
    .addEventListener("click", function(){
        document.querySelector("#cart").style.display="flex";
        var clutter="";
        cart.forEach(function(prod,index){
        clutter+=` 
        <div id="cartelem">
        <img src="${prod.image}" alt="">
        <div id="fontcart">
            <p>${[prod.name]}</p>
            <p>${prod.price}</p>
            <i data-index="${index}" style="pointer-events:all;cursor:pointer; " class="honey ri-checkbox-indeterminate-fill"></i>
        </div>
    </div>`;
    document.querySelector("#cart").innerHTML=clutter;
})
    })
}



function dltcart(){
    document.querySelector("#cart").addEventListener("click",
    function(details){
        if(details.target.classList.contains('honey')){
            cart.splice(details.target.dataset.index,1);
        }
    })
}

let searcher=document.querySelector("#inputbar");

function searchBar(){
    document.querySelector("#inputbar").addEventListener("focus",function(){
        document.querySelector("#focusbar").style.display="block";
        document.querySelector("#cart").style.display="none";
        })
        document.querySelector("#inputbar").addEventListener("blur",function(){
            document.querySelector("#focusbar").style.display="none";
            document.querySelector("#searchdata").style.display="none"
;        })
        document.querySelector("#inputbar").addEventListener("input",function(){
            function filterObjectsByNameStartingWith(input, array) {
                return array.filter(obj => obj.name.toLowerCase().startsWith(input.toLowerCase()));
              };
            
            const filteredArray1 = filterObjectsByNameStartingWith(searcher.value, products);
            const filteredArray2 = filterObjectsByNameStartingWith(searcher.value, acoustics);
            const filteredArray3 = filterObjectsByNameStartingWith(searcher.value, harmoniums);
            const combinedFilteredArray = [...filteredArray1, ...filteredArray2, ...filteredArray3];
            var clutter='';
            combinedFilteredArray.forEach(function(obj){
                clutter+=`<div id="dataelem">
                <h5>${obj.name}</h5>
            </div>`
            })
            document.querySelector("#searchdata").style.display="flex"
            document.querySelector("#searchdata").innerHTML=clutter;
        })
    
}
addProduct();
addnewProduct();
addTonewCart();
addToacCart();
addToCart();
showCart();
closecart();
dltcart();
addacProduct();
searchBar();
Shery.makeMagnet("#anchorr,img,#cardpic,.harmimg", {
 
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });



var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
    document.querySelector("#main").addEventListener("click", function () {
        if (!animating) {
            animating = true;
            gsap.to(h1s[index],
                {
                    top: "-=100%",
                    ease: Expo.easeInOut,
                    duration: 1,
                    onComplete: function () {
                        gsap.set(this._targets[0], { top: "100%" });
                        animating = false;
                    },
                });
            index === h1s.length - 1 ? (index = 0) : index++;

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            })
        }
    });


})

function openbar() {
    let sdebar = document.querySelector("#sidebar");
    sdebar.style.display = "flex";

}

function closebar() {
    let sdebar = document.querySelector("#sidebar");
    sdebar.style.display = "none";

}


