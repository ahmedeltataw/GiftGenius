let List = document.querySelector(".link-list") as HTMLUListElement;
let ListLi = document.querySelectorAll(
  ".link-list li"
) as NodeListOf<HTMLLIElement>;
  let Header = document.querySelector("header") as HTMLHeadingElement
let menuBtn = document.querySelector(".icon-nav-base") as HTMLButtonElement;
//function
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
window.addEventListener("resize", responsiveHeader);
// open and close
function calcMaxHeight(): number {
  let maxHeight: number = 0;
  // mobileResponsive.classList.add("open")
  ListLi.forEach((link: any) => {
      maxHeight += link.clientHeight
  })

  return maxHeight;
}
function slideAnimation(dir: 'up' | 'down'): void {
  let height = dir === 'down' ? 0 : calcMaxHeight();
  let offsetHeader:number= Header.clientHeight;
  let targetHeight = dir === 'down' ? calcMaxHeight() : 0;
  let speed = dir === 'down' ? (targetHeight / (targetHeight * 0.1)) : (height / (height * 0.1));
  let animation = setInterval(() => {
      if ((height <= 0 && dir === 'up') || (height >= targetHeight && dir === 'down')) {
          clearInterval(animation);
          if (dir === 'up') {
            List.style.height = '';
              
              setTimeout(() => {
                List.classList.remove("open")
                  // mobileResponsive.style.top = '';
              }, 300);
          };

      } else {
          height += dir === 'down' ? speed : -speed;
          if (height > targetHeight && dir === 'down') {
              height = targetHeight;
          }
          List.style.height = `${height}px`;
          List.style.top = `${offsetHeader}px`;
      }
  }, 8)

};
let openMenu = () => {
  menuBtn?.classList.toggle("active");
  let isOpen = menuBtn.classList.contains("active");
  menuBtn.setAttribute("aria-expanded", isOpen.toString());
  menuBtn.setAttribute("aria-label", isOpen ? 'open menu' : 'close menu');
  isOpen ? slideAnimation('down') : slideAnimation('up')
};
menuBtn.addEventListener("click", openMenu);