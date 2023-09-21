let iMg1Div = document.querySelector(".page-1-top");
let flag = true
 let flag2 = true
function imgChange(){
    if(flag == true){
        iMg1Div.classList.add("img2");
        flag = false;
    }
    else{
        iMg1Div.classList.remove("img2");
        flag = true;
    }
    setTimeout(imgChange,5000)
}
imgChange()
function imgChange2(){
    if(flag2 == true){
        iMg1Div.classList.add("img3");
        flag2 = false;
    }else{
        iMg1Div.classList.remove("img3");
        flag2 = true;
    }
    setTimeout(imgChange2,6000);
   
}
imgChange2();

let caTegary = document.querySelector(".page-1-top-left");
let caTegaryList = document.querySelector(".categaroyList");
let caTegaryHam = document.querySelectorAll("#category");
let ulList = document.querySelectorAll("#List");
let sVgRotate = document.querySelector(".sVg");
let categaroyFlag = true;


function clicking(){
    caTegary.addEventListener("click",function(){
        if(categaroyFlag == true){
            caTegaryList.style.transform = `translateX(${0}%)`
            sVgRotate.style.transform = `rotate(${180}deg)`
            categaroyFlag = false;
        }else{
            caTegaryList.style.transform = `translateX(-${150}%)`
            categaroyFlag = true;
            sVgRotate.style.transform = `rotate(${0}deg)`
        }
    })
        window.addEventListener("click",function(e){
            if(e.target.id !== "category" && e.target.id !== "List"){
                caTegaryList.style.transform = `translateX(-${150}%)`
                categaroyFlag = true;
            }
        })
}
clicking();




let activeFlag = document.querySelectorAll("#active");
let windowHeight = this.window.innerHeight;
window.addEventListener("scroll",function(){
    activeFlag.forEach(function(e,i){
        let sCrollElement = activeFlag[i].getBoundingClientRect().top
        let fixedNumber = 110;
        if(sCrollElement < windowHeight - fixedNumber){
            activeFlag[i].style.transform = `translateY(${0}px)`
            activeFlag[i].style.opacity = `${1}`
        }else{
            activeFlag[i].style.transform = `translateY(${250}px)`
            activeFlag[i].style.opacity = `${0}`
        }
        
    })
    

})
console.log(activeFlag)

