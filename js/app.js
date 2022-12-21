//scroll to top smoothly
const TopScreen = document.getElementById("to-top");
const header = document.querySelector(".header__page");
TopScreen.addEventListener("click", () => {
  document.body.scrollTo({ top: 0, behavior: "smooth" }); // Safari
  document.documentElement.scrollTo({ top: 0, behavior: "smooth" });  // Chrome, Firefox, IE and Opera
});
/*
1 : A lastSecId to calculate the number of added slots
2 : Create a function that adds content to the page while changing the order of the sections on the page
3 : Use getElementsByTagName : to get "main"
4 : Use insertAdjacentHTML :To add content at the end each time
*/
let lastSecId = 0;
const createNewSection = () => {
  lastSecId++;
  const content = `<section id="section${lastSecId}" data-navpar="Section ${lastSecId}">
    <div class="landing__container">
    <h2>Section ${lastSecId}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis</p>
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
  document.getElementsByTagName("main")[0].insertAdjacentHTML("beforeend", content);
};
/*
 1 : get navbar amd get all sections and loop sections
 2 : querySelectorAll return nodelist array
 3 : get nodelist (item id & )
 4 : dataset :  to read data-navpar
 */
const navBar = document.getElementById("navbar__list__menu");
const createNavItems = () => {
  navBar.innerHTML = "";
  const nodeSections = document.querySelectorAll("section") 
  nodeSections.forEach((item) => {
    const listItem = `<li><a href="#${item.id}" data-navpar="${item.id}" class="menu__link">${item.dataset.navpar}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};
/*
 1 : preventDefault : method cancels the event if it is cancelable
 2 : scrollIntoView : to scroll smooth
 */
navBar.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.dataset.navpar) {
    document.getElementById(`${event.target.dataset.navpar}`).
    scrollIntoView({behavior: "smooth", inline: "nearest"});;
  }
});

window.addEventListener( "scroll",() =>   {
  const nodeSections = document.querySelectorAll("section") 
  nodeSections.forEach( (item) => {
    let activeClass = navBar.querySelector(`[data-navpar=${item.id}]`);
    const scroll = item.getBoundingClientRect();
    if (scroll.top <= 380 && scroll.bottom >= 350) {
      item.classList.add("active-class");
      activeClass.classList.add("active-link");

    } else {
      item.classList.remove("active-class");
      activeClass.classList.remove("active-link");

    }
  });
});
// Run the function for creating section
for (let i = 1; i < 5; i++) {
  createNewSection();
} 
createNavItems();
document.getElementById("btn").addEventListener("click", () => {
  createNewSection();
  createNavItems();
});

