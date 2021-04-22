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
let navElement;
for (const SectionElement of sectionsList) {
    //create element unordered list
    // create element list of class header
    //text within the element = section element
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












  //create class with the BG options
  //add an event on scrolling when he scroll we run the function that calcs the position of sections
  // the section that meets , his nav button shall be added to the class and others removed from the class.

  function Glowup()
  { 
    let currPos = document.documentElement.scrollTop;
    let index = 0;
    //console.log("hi");
    for ( index=0;index<sectionsList.length;index++)//index in sectionsList) 
    {currPos = document.documentElement.scrollTop;
      //if ((currPos >= (sectionsList[index].offsetTop)*(index+1)) && (currPos < (sectionsList[index].offsetHeight + sectionsList[index].offsetTop*(index+1))))
      if (500 >= sectionsList[index].getBoundingClientRect().top && 0 <= sectionsList[index].getBoundingClientRect().top)
      {//console.log(index);
        navList.childNodes[index].classList.add("glow");
      }
      else
      {//console.log(sectionsList[index]);
        if (navList.childNodes[index].classList.contains("glow"))
        {navList.childNodes[index].classList.remove("glow");}
      }
    }
/*
      //if ((currPos > (SectionElement.offsetTop)) && (currPos < (SectionElement.offsetHeight)))
      //{
        //console.log("hi");
        for (let i ;  i<navList.childNodes.length; i++)
        {if (navList.childNodes[i].textContent.trim() === SectionElement.textContent.trim()) 
        navList.childNodes[i].classList.add("glow");
        else 
        navList.childNodes[i<navList.childNodes.length-i].classList.add("glow");}
      //}
      //else
      //{
       // SectionElement.classList.remove(glow);
      //}
    }
*/
  }

  document.addEventListener('scroll',Glowup);





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


