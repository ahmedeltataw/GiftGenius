let MainImg = document.querySelector(".big-img img") as HTMLImageElement;
let AllImg = document.querySelectorAll('.allImg div img') as NodeListOf<HTMLImageElement>
let activeIndx = 0
let More = document.querySelector(".detailsSection .more") as HTMLButtonElement;
let Mins = document.querySelector(".detailsSection .mins") as HTMLButtonElement;
let quantiy = document.getElementById("quantiy") as HTMLInputElement;
// function  to toggle active and scr
let toggleActiveSrc = (selectImg: HTMLImageElement | any) => {
    document.querySelector(".active")?.classList.remove("active");
    selectImg.classList.add("active")
    // console.log(img.src)
    MainImg.style.opacity = '0';
    setTimeout(() => {
        MainImg.style.opacity = '1';
        MainImg.src = selectImg.src;
    }, 500)
}
// when click img
let toggleImg = () => {
    AllImg[0].classList.add("active")
    AllImg.forEach((img: HTMLImageElement) => {
        img.addEventListener("click", () => toggleActiveSrc(img))

    })

}
//  add active to next el
let NextActive = () => {
    activeIndx = (activeIndx + 1) % AllImg.length;
    toggleActiveSrc(AllImg[activeIndx])
}
// loop active
let next = setInterval(NextActive, 5000)
toggleImg()

// 
let MoreQuantiy = () => {
    
    quantiy.value = (parseInt(quantiy.value) + 1).toString()
}
let MinsQuantiy = () => {

    if (quantiy.value === "1") {
        quantiy.value = (parseInt(quantiy.value)).toString();
        console.log("stop")
    } else {
        quantiy.value = (parseInt(quantiy.value) - 1).toString();
    }
}
More.addEventListener("click", MoreQuantiy)
Mins.addEventListener("click", MinsQuantiy)
// quantiy.addEventListener("change" , (e:Event)=>{
//     let correctValue = (e.target as HTMLInputElement) !== null ? (e.target as HTMLInputElement).value : '1'
// })