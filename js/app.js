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

// TODO: stores sections' class data-nav  names
let listOfSectionsNames = [];

// TODO: stores sections' IDs
let listOfSectionsID = [];

// TODO: gets all section items
let listOfSections = document.querySelectorAll('section');

// TODO: gets the navbar's ul
const navBar = document.getElementById('navbar__list');

const frag = document.createDocumentFragment();

// TODO: gets all navbar items
const allNavItems = document.querySelectorAll('li');

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

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to section on link click

// TODO: adds the value set to 'data-nav' data attribute for each section to listOfSectionNames array
for(let section of listOfSections){
    listOfSectionsNames.push(section.getAttribute('data-nav'));
    listOfSectionsID.push(section.id);
}

//TODO: creates list items depending on the number of sections and adds them to the navbar 
//also adds an event listener on the list items to scroll smoothly to the selected section
let  i=0;
for(let section of listOfSections){
    const navBarItem = document.createElement('li'); 
    navBarItem.innerHTML = `<a href='#${listOfSectionsID[i]}'> ${listOfSectionsNames[i]} </a>`;

    navBarItem.addEventListener('click', function(event){
        event.preventDefault();
        section.scrollIntoView({behavior: "smooth"});
    });

    frag.appendChild(navBarItem);

    i++;
}

navBar.appendChild(frag);



// Set sections as active

//TODO: highlights the active section by getting it's boundaries, checking on them, adding a css class to highlight the section and removing the css class from the other sections
// also highlights the navbar item of the section that's in view
document.addEventListener("scroll", function(){
    listOfSections.forEach((element)=>{
        const rect = element.getBoundingClientRect();
        if(rect.top >=0 && rect.top <300){
            element.classList.add("your-active-class");
            let activeSectionClass = element.getAttribute("data-nav");
    
            for (let item of allNavItems){
                if(item.innerText === activeSectionClass)
                {
                    item.classList.add("your-active-class");
                }
                else{
                    item.classList.remove("your-active-class");
                }
            }
        }
        else {
            if(element.classList.contains("your-active-class"))
            {
                element.classList.remove("your-active-class");
            }
            
        }
    });
})