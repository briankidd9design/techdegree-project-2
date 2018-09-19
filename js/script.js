/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Add variables that store DOM elements you will need to reference and/or manipulate
let studentName = document.getElementsByClassName("student-item cf");
let totalStudents = document.getElementsByClassName("student-item cf").length;
const limitPerPage = 10;
const allStudents = document.querySelectorAll(".student-item");//
const studentSearch = document.querySelectorAll(".student-search");
 
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

// Create and append the pagination links - Creating a function that can do this is a good approach

const appendPageLinks = list => {
  // if pagination already exists, remove it

  // determine how many pages are needed for the list by dividing the total number of list items by the max number of items per page
  //let totalPages = Math.ceil(totalStudents/limitPerPage);
  let totalPages = Math.ceil(list.length / 10);
  //alert(totalPages);

  // create a div, give it the “pagination” class, and append it to the .page div
  let pageDiv = document.querySelector('.page');
  let pageLinksDiv = document.createElement('div'); //creation of the div

  pageLinksDiv.className = 'pagination'; //this is the class that the active class gets added to
  pageDiv.appendChild(pageLinksDiv);

  let pageLinksUL = document.createElement('ul');

  pageLinksUL.className = 'pagination-ul';
  pageLinksDiv.appendChild(pageLinksUL);

  // add a ul to the “pagination” div for every page
  for (let j = 1; j <= totalPages; j++) {
	  console.log(j);
    let pageLinkLI = document.createElement('li');
    pageLinkLI.className = 'pagination-li';
    pageLinkLI.style.marginRight = '0.5em';
    // create an anchor tag inside the li, and number it
    let pageLinkA = document.createElement('a');
    // add li and a tags with the page number text	
    pageLinkA.className = 'inactive';
    pageLinkA.textContent = j;
	if(pageLinkA.textContent === "1"){
		window.onload = function(){
			 pageLinkA.className = 'active';
			
		}
	}
    pageLinkA.style.cursor = 'pointer';
    pageLinkLI.appendChild(pageLinkA);
    //let hello = alert ("hello");
    // add the li to the parent ul
    pageLinksUL.appendChild(pageLinkLI);
  }

  let paginationDiv = document.querySelector('.pagination'); //ok
  let inactive = paginationDiv.getElementsByClassName('inactive'); //ok
  //let active = document.querySelector(".active");
  var active = paginationDiv.querySelectorAll('a');
  active.className = 'active';
 

  for (let i = 0; i < inactive.length; i++) {
	let r = 0;
    inactive[i].classList.remove('active');
    while (r < inactive.length) {
      inactive[r].classList.replace('active', 'inactive');
      r++;
    }

    inactive[i].addEventListener('click', function(event) {
      if (event.target && event.target.nodeName == 'A') {
        event.target.className = 'active';
      }
    });
  }

  pageLinksUL.addEventListener('click', event => {
    document.querySelectorAll('a').forEach(element => {
      if (element !== event.target) {
        element.classList.remove('active');
      }
    });
    if (event.target.className == 'active') {
      showPage(list, event.target.textContent);
    }
  });

};


//sets up display for search capability
function showSearchBox(list) {
  
}

function searchStudents(list, name) {

}


appendPageLinks(studentName);
showPage(studentName, 1);



// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






