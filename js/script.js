/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let studentName = document.getElementsByClassName("student-item cf");
let totalStudents = document.getElementsByClassName("student-item cf").length;
const limitPerPage = 10;
let totalPages = Math.ceil(totalStudents/limitPerPage);



// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

const showPage = (list, page) => {
// loop over items in the list parameter
for(let i = 0; i <= list.length; i++){
	let itemsPerPageFirst = (page * 10) - 10;
	let itemsPerPageLast = (page * 10) - 1;
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

//alert(list);
//alert (page);


}


showPage(studentName, 1);



// Create and append the pagination links - Creating a function that can do this is a good approach

const appendPageLinks = (list) => {
// if pagination already exists, remove it
// determine how many pages are needed for the list by dividing the total number
//of list items by the max number of items per page
// create a div, give it the “pagination” class, and append it to the .page div
// add a ul to the “pagination” div
// for every page
// add li and a tags with the page number text
// add an event listener to each a tag, or add an event listener to the pagination div,
//and use event delegation to target the a tags to define what happens they are clicked
// calls the showPage function to display the appropriate page
// loop over pagination links to remove active class from all
// add the active class to the link that was just clicked, otherwise known as the
event.target
}






// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






