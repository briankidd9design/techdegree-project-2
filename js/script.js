/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let studentName = document.getElementsByClassName("student-item cf");
let totalStudents = document.getElementsByClassName("student-item cf").length;
const limitPerPage = 10;

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

const showPage = (list, page) => {
// loop over items in the list parameter
for(let i = 0; i < list.length; i++){
	let itemsPerPageFirst = (page * 10) - 10;
	let itemsPerPageLast = (page * 10) - 1;
	//list[0].style.display = "none";
	// if the index of a list item is >= the index of the first item that should be shown on
	//the page, (index starts out 0 - 9 ))
	//&& the list item index is <= the index of the last item that should be shown on
	if (i >= itemsPerPageFirst && i <= itemsPerPageLast){
			list[i].style.display = "block";
		}// else hide
	else{
			list[i].style.display = "none";
		}
	}
}

showPage(studentName, 1);


// Create and append the pagination links - Creating a function that can do this is a good approach

const appendPageLinks = (list) => {
// if pagination already exists, remove it

// determine how many pages are needed for the list by dividing the total number of list items by the max number of items per page
//let totalPages = Math.ceil(totalStudents/limitPerPage);
 let totalPages = Math.ceil(list.length / 10);
 alert("Total pages equals " + totalPages);
//alert(totalPages);

// create a div, give it the “pagination” class, and append it to the .page div
let pageDiv = document.querySelector(".page");
let pageLinksDiv = document.createElement("div");//creation of the div

pageLinksDiv.className = "pagination";//this is the class that the active class gets added to
pageDiv.appendChild(pageLinksDiv);

let pageLinksUL = document.createElement("ul");

pageLinksUL.className = "pagination-ul";
pageLinksDiv.appendChild(pageLinksUL);

// add a ul to the “pagination” div for every page
for (let j = 1; j <= totalPages; j++) {
    let pageLinkLI = document.createElement("li");
    pageLinkLI.className = "pagination-li";
    pageLinkLI.style.marginRight = "0.5em";
    // create an anchor tag inside the li, and number it
    let pageLinkA = document.createElement("a");
	// add li and a tags with the page number text
    pageLinkA.className = "inactive";
    pageLinkA.textContent = j;
    pageLinkA.style.cursor = "pointer";
    pageLinkLI.appendChild(pageLinkA);
	//let hello = alert ("hello");
    // add the li to the parent ul
    pageLinksUL.appendChild(pageLinkLI);
  }

// add an event listener to each a tag, or add an event listener to the pagination div,
//let inactive = document.querySelectorAll(".inactive");



//let active = 
//const active = document.querySelector(".pagination-ul").querySelectorAll(".pagination-li").querySelectorAll("a");
//.querySelectorAll(".pagination-li").querySelector("a");


 // set the class name of the <a> tag to "active" so the CSS will
// display it in the "active" style
	

let paginationDiv = document.querySelector(".pagination");//ok
let inactive = paginationDiv.getElementsByClassName("inactive");//ok
//let active = document.querySelector(".active");
var active = paginationDiv.querySelectorAll("a");
active.className = "active";	
//console.log(active);

for (let i = 0; i < inactive.length; i++) {
//inactive[i].classList.remove("active");	
//let pageTab = inactive[i];
console.log("the inactive array length is " + inactive.length);

let r = 0;
	while (r < inactive.length) {
		inactive[r].classList.replace("active", "inactive");
		r++;
	}

  inactive[i].addEventListener("click", function(e) {//ok
  
	   if(e.target && e.target.nodeName == "A"){
			e.target.className = "active";
			//pageTab.className = "active";
			console.log(inactive[i]);
			console.log("List item ", e.target.textContent, " was clicked!");
	  } 
/* 	  
	let r = 0;
	while (r < inactive.length) {
		inactive[r].classList.remove("active");
		r++;
	} */
	console.log("the inactive array length is " + inactive.length);
	/* for (let j = 0; j < active.length; j++) {
		active[j].classList.remove("active");
	}  */
	  
	pageLinksUL.addEventListener("click", event => {
		if (event.target.className == "active") {
		let pageClicked = event.target.textContent;
		showPage(list, pageClicked);
    }
  });
	  
	  
	  
  });
}

 /* for (let j = 0; j < active.length; j++) {
	active[j].classList.remove("active");
}  */
/* for (let j = 0; j < inactive.length; j++) {
	inactive[j].classList.remove("active");
} */


//and use event delegation to target the a tags to define what happens they are clicked

// calls the showPage function to display the appropriate page
// loop over pagination links to remove active class from all
// add the active class to the link that was just clicked, otherwise known as the
//showPage(); 
//event.target


}

//appendPageLinks(studentName, pageNumber );
appendPageLinks(studentName);



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






