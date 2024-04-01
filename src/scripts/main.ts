let List = document.querySelector(".link-list") as HTMLUListElement;
let ListLi = document.querySelectorAll(
  ".link-list li"
) as NodeListOf<HTMLLIElement>;
let Header = document.querySelector("header") as HTMLHeadingElement
let menuBtn = document.querySelector(".icon-nav-base") as HTMLButtonElement;
let drop1 = document.querySelector("#drop1") as HTMLLIElement;

let drop2 = document.querySelector("#drop2") as HTMLLIElement;
let drop3 = document.querySelector("#drop3") as HTMLLIElement;
let drop4 = document.querySelector("#drop4") as HTMLLIElement;
let drop5 = document.querySelector("#drop5") as HTMLLIElement;

let dropContent = document.querySelector("#drop1 .dropdown-content") as HTMLUListElement;
let dropLi = document.querySelectorAll("#drop1 .dropdown-content li") as NodeListOf<HTMLLIElement>;
//
let dropContent2 = document.querySelector("#drop2 .dropdown-content") as HTMLUListElement;
let dropLi2 = document.querySelectorAll("#drop2 .dropdown-content li") as NodeListOf<HTMLLIElement>;
//
let dropContent3 = document.querySelector("#drop3 .dropdown-content") as HTMLUListElement;
let dropLi3 = document.querySelectorAll("#drop3 .dropdown-content li") as NodeListOf<HTMLLIElement>;

//
let dropContent4 = document.querySelector("#drop4 .dropdown-content") as HTMLUListElement;
let dropLi4 = document.querySelectorAll("#drop4 .dropdown-content li") as NodeListOf<HTMLLIElement>;
//
let dropContent5 = document.querySelector("#drop5 .dropdown-content") as HTMLUListElement;
let dropLi5 = document.querySelectorAll("#drop5 .dropdown-content li") as NodeListOf<HTMLLIElement>;

// let arrowDropDown = document.getElementById("arrowDropDown") as HTMLElement
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
// let isOpen = false;
// let toggleDropdown = (selectDrop: HTMLLIElement, selectDropUi: HTMLUListElement, selectDropLi: NodeListOf<HTMLLIElement>) => {
//   isOpen = !isOpen;
//   openDropMenu(isOpen, selectDropUi, selectDropLi);
//   let arrowDrop: any = selectDrop.children[1]
//   // List.style.overflowY='scroll'
//   arrowDrop.classList.toggle("active")
//   if (menuBtn.classList.contains("active")) {
//     if (arrowDrop.classList.contains('active')) {

//       let margin = calcMaxHeight(selectDropLi)
//       selectDrop.style.marginBottom = `${margin}px`;
//       List.style.height = `${parseInt(List.style.height) + margin}px`

//     } else {
//       let margin = calcMaxHeight(selectDropLi)

//       setTimeout(() => {
//         List.style.height = `${parseInt(List.style.height) - margin}px`
//         selectDrop.style.marginBottom = `0`;
//       }, 400)
//     }

//   }
//   return ;

// }
// let openDropMenu = (show: boolean, selectDrop: HTMLUListElement, selectDropLi: NodeListOf<HTMLLIElement>) => {

//   if (show) {
//     selectDrop.classList.add("open")
//     setTimeout(() => {
//       animationSlide('down', selectDropLi, selectDrop)
//     })
//   } else {
//     animationSlide('up', selectDropLi, selectDrop)
//     setTimeout(() => {
//       selectDrop.classList.remove("open")
//     }, 480)
//   }

// }
let openDropMenu = (selectDrop: HTMLUListElement, selectDropLi: NodeListOf<HTMLLIElement>) => {
  selectDrop.classList.add("open");
  animationSlide('down', selectDropLi, selectDrop);
}

let closeDropMenu = (selectDrop: HTMLUListElement, selectDropLi: NodeListOf<HTMLLIElement>) => {
  animationSlide('up', selectDropLi, selectDrop);
  setTimeout(() => {
      selectDrop.classList.remove("open");
  }, 480);
}

let toggleDropdown = (selectDrop: HTMLLIElement, selectDropUi: HTMLUListElement, selectDropLi: NodeListOf<HTMLLIElement>) => {
  if (selectDropUi.classList.contains("open")) {
      closeDropMenu(selectDropUi, selectDropLi);
      return;
  }
  let arrowDrop: any = selectDrop.children[1]
  // List.style.overflowY='scroll'
  arrowDrop.classList.toggle("active")
  if (menuBtn.classList.contains("active")) {
    if (arrowDrop.classList.contains('active')) {

      let margin = calcMaxHeight(selectDropLi)
      selectDrop.style.marginBottom = `${margin}px`;
      List.style.height = `${parseInt(List.style.height) + margin}px`

    } else {
      let margin = calcMaxHeight(selectDropLi)

      setTimeout(() => {
        List.style.height = `${parseInt(List.style.height) - margin}px`
        selectDrop.style.marginBottom = `0`;
      }, 400)
    }

  }

  // Close any other open dropdowns
  document.querySelectorAll('.dropdown-content.open').forEach((dropdown) => {
      closeDropMenu(dropdown as HTMLUListElement, dropdown.querySelectorAll('.dropdown-content > li'));
      dropdown.classList.remove("open");
      // arrowDrop.classList.remove("active")
  });

  openDropMenu(selectDropUi, selectDropLi);
  selectDropUi.classList.add("open");
  
}
//(((((((((addEventListener )))))))))

window.addEventListener("resize", responsiveHeader);
drop1.addEventListener("click", () => toggleDropdown(drop1, dropContent, dropLi));

drop2.addEventListener("click", () => toggleDropdown(drop2, dropContent2, dropLi2));
drop3.addEventListener("click", () => toggleDropdown(drop3, dropContent3, dropLi3));
drop4.addEventListener("click", () => toggleDropdown(drop4, dropContent4, dropLi4));
drop5.addEventListener("click", () => toggleDropdown(drop5, dropContent5, dropLi5));



menuBtn.addEventListener("click", openMenu);
