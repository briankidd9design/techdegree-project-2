/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Add variables that store DOM elements you will need to reference and/or manipulate
//this creates an object with all the students in the list
/* const studentListUL = document.querySelectorAll('student-list li');
console.log(studentListUL); */
const allStudents = document.getElementsByClassName("student-item");
const totalStudents = document.getElementsByClassName("student-item").length;
const pageHeader = document.querySelector(".page-header");
//document.getElementsByClassName(".student-list")[0].style.display = 'none';
/***Setting Up the Search Input Field and also Search Button**/
const searchInputField = document.createElement("div");
	//adds the class name student-search to the searchInputField
const searchStudentButton = document.createElement("button");
const inputBox = document.createElement("input");//searchInput

searchInputField.className = "student-search";
	//finally appends the searchInputField to the page header class
pageHeader.appendChild(searchInputField);
inputBox.placeholder = "Search student list...";
inputBox.className = "input-field";
	//this adds the element input, the className input-field and the placeHolder text to the input box
searchInputField.appendChild(inputBox);
	//creation of the search button
	//let searchStudentButton = document.createElement("button");
searchStudentButton.textContent = "Search";
searchInputField.appendChild(searchStudentButton);
	//This event listener triggers the showSearchResults function and has list, userinput, and input for arguments
	//to be used in the showSearchResults Function;
/**************************************************************/
	
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
const showPage = (studentList, page) => {
// loop over items in the list parameter
	for(let i = 0; i < studentList.length; i++){
	//the bottom index number of the range of students to show on the page
	
		let itemsPerPageFirst = (page * 10) - 10;
		//the top index number of the range of students to show on the page
		let itemsPerPageLast = (page * 10) - 1;
		// if the index of a list item is >= the index of the first item that should be shown on
		//the page, (index starts out 0 - 9 ))
		//&& the list item index is <= the index of the last item that should be shown on page then show items
		if (i >= itemsPerPageFirst && i <= itemsPerPageLast){
				studentList[i].style.display = "block";
			}// else hide items
		else{
				studentList[i].style.display = "none";
			}
		}
}

// Add functionality to the pagination buttons so that they show and hide the correct items
const appendPageLinks = (studentList) => {
  /***** Setting up the pagination links *****/
// create a div, give it the “pagination” class, and append it to the .page div
	let pageDiv = document.querySelector('.page');
	let pageLinksDiv = document.createElement('div'); //creation of the div
//this is the class that the active class gets added to
	const pageLinksUL = document.createElement('ul');
	pageLinksDiv.className = 'pagination'; 
	pageDiv.appendChild(pageLinksDiv);
//this creates the unorderd list of students to show per page
//const pageLinksUL = document.createElement('ul');
	pageLinksUL.className = 'pagination-ul';
  //this appends the page links div with its class of pagination-ul to the pageLinksUL
	pageLinksDiv.appendChild(pageLinksUL);

	let paginationDiv = document.querySelector('.pagination'); //ok
	let inactive = paginationDiv.getElementsByClassName('inactive'); //ok
  //let active = document.querySelector(".active");
	const active = paginationDiv.querySelectorAll('a');
	active.className = 'active';	
	
/**************************************************/
  
//total pages are rounded up from the total number of students divided by 10
	let totalPages = Math.ceil(studentList.length / 10);
//this loop appends the pagination links adding the correct number taking into account the studentsList/10
	for (let j = 1; j <= totalPages; j++) {
	 // console.log(j); 
		let pageLinkLI = document.createElement('li');//
		pageLinkLI.className = 'pagination-li';
		pageLinkLI.style.marginRight = '0.5em';
		// create an anchor tag inside the li, and number it
		let pageLinkA = document.createElement('a');
		// add li and a tags with the page number text	
		pageLinkA.className = 'inactive';
		pageLinkA.textContent = j;
		pageLinkA.style.cursor = 'pointer';
		pageLinkLI.appendChild(pageLinkA);
		// add the li to the parent ul
		pageLinksUL.appendChild(pageLinkLI);
	}
	paginationEventListener(pageLinksUL, studentList);
	addActiveClass(inactive);
};

//adding an event listener for the pagination links. 
//changes page to that of the active class
 const paginationEventListener = function (pageLinksList, studentList) {

	//shows the correct page depending on if the link is active or not. If it is active it adds the link's textContent to the showPage() function
	pageLinksList.addEventListener('click', event => {
    document.querySelectorAll('a').forEach(element => {
      if (element !== event.target) {
        element.classList.remove('active');
      }
    });
    if (event.target.className == 'active') {
      showPage(studentList, event.target.textContent);
    }
  }); 
	
}; 
//adds active class to pagination link that is clicked on
 const addActiveClass = function(inactiveLink){
	//console.log(inactiveLink);
		for (let j = 0; j < inactiveLink.length; j++) {
	
		 inactiveLink[j].addEventListener('click', function(event) {
		  if (event.target && event.target.nodeName == 'A') {
			event.target.className = 'active';
		  }
		}); 
	}		
} 
//this adds the active class to the first link of the pagination
const setDefaultActiveClass = function(){
	const pageLinksLI = document.querySelectorAll('.pagination-li A');
	
	for(let i = 0; i < pageLinksLI.length; i+=1){
		if (i == 0){
			pageLinksLI[i].className = "active";	 
		}else{	 
			pageLinksLI[i].className = "inactive";
		}
	} 
}
//event listener for searchStudentButton to invoke the showSearchResults function
searchStudentButton.addEventListener("click", () => {
	let userInput = inputBox.value.toLowerCase();
	showSearchResults(allStudents, userInput, inputBox);
});
//keyUp event listener for searchInputField
 searchInputField.addEventListener('keyup', (e) => {
	let userInput = inputBox.value.toLowerCase();
	showSearchResults(allStudents, userInput, inputBox);
}); 
	
const studentsDisplayNone = function(){
	let studentListClass = document.querySelectorAll('.student-list');
	for(let i = 0; i < studentListClass.length; i++){
		studentListClass[i].style.display = 'none';
	}
	
}	
	
	
	
function showSearchResults(studentList, userTextInput, inputTextBox) {//compare the list of students to the userInput
	let duplicatePaginationList = document.querySelector(".pagination-ul");
	let listAsArray = Array.from(studentList);
	//The RegExp constructor creates a regular expression object for matching text with a pattern
	//in this case it allows the user's search to be compared with letter values of the listAsArray array
	let regExp = new RegExp(userTextInput);
	//The filter() method creates a new array with all the elments that pass the test implemented by the provided function
	let matchesFoundArray = listAsArray.filter(text => regExp.test(text.innerText) === true);
	if (matchesFoundArray.length === 0){
		 //console.log("no results");
		 inputTextBox.value = "";
	
		 //this changes the inputText from Search student list to No results for userInputText
		 inputTextBox.placeholder = "No results for " + userTextInput;
		 console.log("student list " + studentList);
		 //if the user clicks in the inputbox then the page reloads 
		 inputTextBox.addEventListener("click", () =>{
			 document.location.reload(true, showPage, studentList, 1);
		 });
		 //after now search results the page will reload after 5 seconds
		//let duplicatePaginationList = document.querySelector(".pagination-ul");
		studentsDisplayNone();
		duplicatePaginationList.style.display = "none";
		 
	setTimeout(
	function() {
	location.reload() },
	1000 ); 
	 } else {
		  for (let i = 0; i < studentList.length; i+=1){
			 studentList[i].style.display = "none";
		 } 
		 showPage(matchesFoundArray, 1);
		//remove the pagination pages if they already exist after a search result is shown	
		//let duplicatePaginationList = document.querySelector(".pagination-ul");
	
		if(duplicatePaginationList!== null) {
			duplicatePaginationList.parentNode.removeChild(duplicatePaginationList);
		}
		
		let inactiveClass = document.getElementsByClassName('inactive');
		 
		appendPageLinks(matchesFoundArray); 
		addActiveClass(inactiveClass);
		setDefaultActiveClass();
	}
}

appendPageLinks(allStudents);
showPage(allStudents, 1);
setDefaultActiveClass();









