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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const sectionsList = document.querySelectorAll('.landing__container h2'); /*returns node list of 4 elemts*/ 
const parentClass = document.querySelector('.navbar__menu'); //change parent class style
/*mainpulating nav list style*/ 
parentClass.style.backgroundColor =  "rgb(136,203,171)";
parentClass.style.textAlign = "center";

let navList = document.createElement('ul');
parentClass.appendChild(navList) ; 
navList.style.fontSize ="20pt";
navList.style.fontStyle = "bold";
navList.style.textAlign="center";
//navList.style.border = "10px solid black";
navList.style.alignItems = "center";

for (const SectionElement of sectionsList) {
    //create element unordered list
    // create element list of class header
    //text within the element = section element
    let navElement = navList.appendChild( document.createElement('li'));
    navElement.textContent= SectionElement.textContent;
    navElement.innerHTML += "&nbsp;";
    navElement.style.border = "10px none black";
    navElement.style.display= "inline-block";
    navElement.style.cursor= "pointer"; 
    
  }
  
  //const x= document.querySelector('.landing__container h2');
  function Showup(evt)
  { 
    for (const SectionElement of sectionsList) 
    {
         if(evt.target.textContent.trim() === SectionElement.textContent.trim()) 
        {
            SectionElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            //console.log(SectionElement.textContent.trim());
            //console.log(evt.target.textContent.trim());
            //console.log (SectionElement.textContent.trim() === evt.target.textContent.trim() );
        }
    }

  }

  navList.addEventListener('click',Showup);
/*
  parentClass.addEventListener('click',  event => {
    x.scrollIntoView(true);
  });
  */

  //add event listener on ul , ake li event target , the event is click and the function is make the section on top of page 

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


