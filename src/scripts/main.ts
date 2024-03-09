let List = document.querySelector(".link-list") as HTMLUListElement;
let ListLi = document.querySelectorAll(
  ".link-list li"
) as NodeListOf<HTMLLIElement>;
let Header = document.querySelector("header") as HTMLHeadingElement
let menuBtn = document.querySelector(".icon-nav-base") as HTMLButtonElement;
let drop1 = document.querySelector("#drop1") as HTMLLIElement;

let drop2 = document.querySelector("#drop2") as HTMLLIElement;

let dropContent = document.querySelector("#drop1 .dropdown-content") as HTMLUListElement;
let dropLi = document.querySelectorAll("#drop1 .dropdown-content li") as NodeListOf<HTMLLIElement>;
let dropContent2 = document.querySelector("#drop2 .dropdown-content") as HTMLUListElement;
let dropLi2 = document.querySelectorAll("#drop2 .dropdown-content li") as NodeListOf<HTMLLIElement>;
let arrowDropDown = document.getElementById("arrowDropDown") as HTMLElement
//function
// *****responsive header *********
let responsiveHeader = () => {
  const Width = window.innerWidth;
  if (Width < 992) {
    List.classList.add("Mobile");
    List.classList.remove("normalMenu");
  } else {
    List.classList.remove("Mobile");
    List.classList.add("normalMenu");
  }
};
responsiveHeader();

// // *****open and close *********
// (((((((((calc height)))))))))
function calcMaxHeight(items: NodeListOf<HTMLLIElement>): number {
  let maxHeight: number = 0;
  // mobileResponsive.classList.add("open")
  items.forEach((link: any) => {
    maxHeight += link.clientHeight
  })

  return maxHeight;
}
// (((((((((animation slide )))))))))
let animationSlide = (dir: 'up' | 'down', totalHeight: NodeListOf<HTMLLIElement> | any, targetEL: HTMLUListElement | any) => {
  let height = dir === "down" ? 0 : calcMaxHeight(totalHeight);
  let targetHeight = dir === 'down' ? calcMaxHeight(totalHeight) : 0;
  let speed = dir === 'down' ? (targetHeight / (targetHeight * 0.1)) : (height / (height * 0.1));
  function animate() {
    if ((height <= 0 && dir === 'up') || (height >= targetHeight && dir === 'down')) {
      if (dir === 'up') {
        targetEL.style.height = "0";
      }
      return; // Exit animation loop
    }
    height += dir === "down" ? speed : -speed;
    if (height > targetHeight && dir === 'down') {
      height = targetHeight;
    }
    targetEL.style.height = `${height}px`;
    // Request next animation frame
    requestAnimationFrame(animate);
  }

  // Start the animation loop
  requestAnimationFrame(animate);
}


//(((((((((open responsive header )))))))))
let openMenu = () => {
  List.classList.add("open")
  menuBtn?.classList.toggle("active");
  let isOpen = menuBtn.classList.contains("active");
  menuBtn.setAttribute("aria-expanded", isOpen.toString());
  menuBtn.setAttribute("aria-label", isOpen ? 'open menu' : 'close menu');
  isOpen ? animationSlide('down', ListLi, List) : animationSlide('up', ListLi, List)
  if (!isOpen) {
    setTimeout(() => {
      List.classList.remove("open")
    }, 600);
  }

};

//(((((((((open  drop down )))))))))
let toggleDropdown = (selectDrop:HTMLLIElement , selectDropUi:HTMLUListElement ,selectDropLi:NodeListOf<HTMLLIElement>) => {
  isOpen = !isOpen;
  openDropMenu(isOpen,selectDropUi ,selectDropLi);
  // console.log(selectDropUi)
  let arrowDrop: any =selectDrop.children[1] 
  arrowDrop.classList.toggle("active")
  if (menuBtn.classList.contains("active")) {
    if (arrowDropDown.classList.contains('active') ) {
      let margin = calcMaxHeight(dropLi)
      selectDrop.style.marginBottom = `${margin}px`;
      List.style.height = `${parseInt(List.style.height) + margin}px`
      
    }else{
      let margin = calcMaxHeight(dropLi)
      
    setTimeout(() => {
      List.style.height = `${parseInt(List.style.height) - margin}px`
      selectDrop.style.marginBottom = `0`;
    }, 450)
    }
    
  } 
}
let openDropMenu = (show: boolean , selectDrop:HTMLUListElement ,selectDropLi:NodeListOf<HTMLLIElement>) => {

  if (show) {
    selectDrop.classList.add("open")
    setTimeout(() => {
      animationSlide('down', selectDropLi, selectDrop)
    })
  } else {
    animationSlide('up', selectDropLi, selectDrop)
    setTimeout(() => {
      selectDrop.classList.remove("open")
    }, 480)
  }

}

//(((((((((addEventListener )))))))))
let isOpen = false;
window.addEventListener("resize", responsiveHeader);
drop1.addEventListener("click", ()=>toggleDropdown(drop1,dropContent ,dropLi));
console.log(dropContent)
drop2.addEventListener("click", ()=>toggleDropdown(drop2,dropContent2 ,dropLi2));



menuBtn.addEventListener("click", openMenu);
