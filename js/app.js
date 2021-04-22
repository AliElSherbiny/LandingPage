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

const parentClass = document.querySelector('.navbar__menu'); //change parent class style
const navList = document.createElement('ul');
parentClass.appendChild(navList) ; 
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

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



