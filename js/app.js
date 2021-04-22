/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/*getting all the sections in the HTML , the secions lie under class element landing__container and then the tag element h2*/ 
const sectionsList = document.querySelectorAll('.landing__container h2'); /*returns node list of 4 elemts*/ 
/* get the parent element for our "ul" representing the navbar element */
const parentClass = document.querySelector('.navbar__menu'); //change parent class style

/*creating the ul element*/
let navList = document.createElement('ul');
parentClass.appendChild(navList) ; 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/*Description: Function used to scroll to the specific section when this section is clicked in nav list*/ 
function Showup(evt)
{ 
  for (const SectionElement of sectionsList) 
  {
       if(evt.target.textContent.trim() === SectionElement.textContent.trim()) 
      {
          SectionElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //scrolling to the section if condition above is true
      }
  }

}

/*Description: function to highlight the active section by adding the section name in navlist to a "glow" class */
function Glowup()
{ 
  for ( let index=0;index<sectionsList.length;index++)
  {
    if (500 >= sectionsList[index].getBoundingClientRect().top && 0 <= sectionsList[index].getBoundingClientRect().top)
    {
      navList.childNodes[index].classList.add("glow");
    }
    else
    {
      if (navList.childNodes[index].classList.contains("glow"))
        {
          navList.childNodes[index].classList.remove("glow");
        }
    }
  }
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

parentClass.style.backgroundColor =  "rgb(136,203,171)";
parentClass.style.textAlign = "center";
navList.style.fontSize ="20pt";
navList.style.fontStyle = "bold";
navList.style.textAlign="center";
navList.style.alignItems = "center";
let navElement;
for (const SectionElement of sectionsList) {

    navElement = navList.appendChild( document.createElement('li'));
    navElement.innerHTML = "&nbsp;";
    navElement.innerHTML += "&nbsp;";
    navElement.textContent= SectionElement.textContent;  
    navElement.innerHTML += "&nbsp;";
    navElement.innerHTML += "&nbsp;";
    navElement.style.border = "10px none black";
    navElement.style.display= "inline-block";
    navElement.style.cursor= "pointer"; 
    
  }
 

  navList.addEventListener('click',Showup);
  document.addEventListener('scroll',Glowup);



