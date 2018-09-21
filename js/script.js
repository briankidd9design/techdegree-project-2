/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
// Add variables that store DOM elements you will need to reference and/or manipulate
//this creates an object with all the students in the list
let allStudents = document.getElementsByClassName("student-item");
//stores the length of the student-item array 
let totalStudents = document.getElementsByClassName("student-item").length;


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

const showPage = (list, page) => {
// loop over items in the list parameter
for(let i = 0; i < list.length; i++){
	//the bottom index number of the range of students to show on the page
	let itemsPerPageFirst = (page * 10) - 10;
	//the top index number of the range of students to show on the page
	let itemsPerPageLast = (page * 10) - 1;
	// if the index of a list item is >= the index of the first item that should be shown on
	//the page, (index starts out 0 - 9 ))
	//&& the list item index is <= the index of the last item that should be shown on page then show items
	if (i >= itemsPerPageFirst && i <= itemsPerPageLast){
			list[i].style.display = "block";
		}// else hide items
	else{
			list[i].style.display = "none";
		}
	}
	//this calls the showSearchBox function to create a search box and button on every page.
	showSearchBox(allStudents);
}

// Create and append the pagination links - Creating a function that can do this is a good approach

const appendPageLinks = list => {
  
//total pages are rounded up from the total number of students divided by 10
  let totalPages = Math.ceil(list.length / 10);

  // create a div, give it the “pagination” class, and append it to the .page div
  let pageDiv = document.querySelector('.page');
  let pageLinksDiv = document.createElement('div'); //creation of the div
//this is the class that the active class gets added to
  pageLinksDiv.className = 'pagination'; 
  pageDiv.appendChild(pageLinksDiv);
//this creates the unorderd list of students to show per page
  let pageLinksUL = document.createElement('ul');
  pageLinksUL.className = 'pagination-ul';
  //this appends the page links div with its class of pagination-ul to the pageLinksUL
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
	//on window onload the class of the link with the textContent of 1 will be 'active'
	if(pageLinkA.textContent === "1"){
		window.onload = function(){
			 pageLinkA.className = 'active';
			
		}
	}
    pageLinkA.style.cursor = 'pointer';
    pageLinkLI.appendChild(pageLinkA);
    // add the li to the parent ul
    pageLinksUL.appendChild(pageLinkLI);
  }

  let paginationDiv = document.querySelector('.pagination'); //ok
  let inactive = paginationDiv.getElementsByClassName('inactive'); //ok
  //let active = document.querySelector(".active");
  var active = paginationDiv.querySelectorAll('a');
  active.className = 'active';
 
  for (let i = 0; i < inactive.length; i++) {
	/* let r = 0;
    inactive[i].classList.remove('active'); */

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
//showSearchBox function must display search box and button and then also store the data entered into the search box 
//in order to compare it with the student-name 
function showSearchBox(list) {
	//if a student search box exists then delete it to set up a new one
	let duplicateSearchInputField = document.querySelector(".student-search");
	
	if(duplicateSearchInputField !== null) {
		duplicateSearchInputField.parentNode.removeChild(duplicateSearchInputField);
	}
	
	
	let pageHeader = document.querySelector(".page-header");
	//create a new div for the search field
	let searchInputField = document.createElement("div");
	//adds the class name student-search to the searchInputField
	searchInputField.className = "student-search";
	//finally appends the searchInputField to the page header class
	pageHeader.appendChild(searchInputField);
	
	let input = document.createElement("input");
	input.placeholder = "Search student list...";
	input.className = "input-field";
	//this adds the element input, the className input-field and the placeHolder text to the input box
	searchInputField.appendChild(input);
	//creation of the search button
	let searchStudentButton = document.createElement("button");
	searchStudentButton.textContent = "Search";
	searchInputField.appendChild(searchStudentButton);
	//This event listener triggers the showSearchResults function and has list, userinput, and input for arguments
	//to be used in the showSearchResults Function;
	searchStudentButton.addEventListener("click", () => {
		let userInput = input.value.toLowerCase();
		showSearchResults(list, userInput, input);
		//console.log(userInput);

	});
	//KeyUp functionality
	 let keyUpSearch = document.querySelector(".input-field");
	 let studentListItem = document.getElementsByClassName("student-item");
	 //reference for keyUp event listener: https://stackoverflow.com/questions/36897978/js-search-using-keyup-event-on-input-tag
	 keyUpSearch.addEventListener("keyup", function() {
		 Array.prototype.forEach.call(studentListItem, function(studentListItem){
	/* 			 
		let duplicatePaginationList = document.querySelector(".pagination-ul");
	
		if(duplicatePaginationList!== null) {
			duplicatePaginationList.parentNode.removeChild(duplicatePaginationList);
		} */
			 	
			 if(studentListItem.textContent.trim().indexOf(keyUpSearch.value) > -1){

				 studentListItem.style.display = "block";
				 //use appendPageLinke function to use the correct number of pagination links within the KeyUp event
				 
				 //let studentListItemArray = Array.from(studentListItem);//this converts the node list of all the students to an array
				 
				 
				 // studentListItemArray.length;
				// console.log("studentListItemArray equals " + studentListItemArray);
			//	console.log(studentListItem);
				
				 
			/* 	studentListItem.className = "student-keyup";
				 let studentKeyUp = document.querySelector(".student-keyup");
				 //appendPageLinks(studentKeyUp );
				  */
			 }
			 else{
				 studentListItem.style.display = "none";
				
			 }
			 
			  
			 	
		 });
	 });
	
	
}

function showSearchResults(list, inputtedName, inputText) {//compare the list of students to the userInput
	console.log(inputtedName);//user input
	console.log(list);//the entire list of students with the class of ".studentItem"
	//this converts the node list of all the students to an array
	let listAsArray = Array.from(list);
	//console.log(listAsArray);
	
	//The RegExp constructor creates a regular expression object for matching text with a pattern
	//in this case it allows the user's search to be compared with letter values of the listAsArray array
	let regExp = new RegExp(inputtedName);
	//The filter() method creates a new array with all the elments that pass the test implemented by the provided function
	
	let matchesFoundArray = listAsArray.filter(text => regExp.test(text.innerText) === true);
	 /* let matchesFoundArray = listAsArray.filter(function (text){
			regExp.test(text.innerText) === true;
		}); */
	//console.log("matches " + matchesFoundArray );
	 if (matchesFoundArray.length === 0){
		 console.log("no results");
		 inputText.value = "";
		 //this changes the inputText from Search student list to No results for inputtedName
		 inputText.placeholder = "No results for " + inputtedName;
		 //if the user clicks in the inputbox then the page reloads 
		 inputText.addEventListener("click", () =>{
			 document.location.reload(true, showPage, list, 1);
		 });
		 //inputText.placeholder.style.color = "red";
		 //after now search results the page will reload after 5 seconds
		let timeoutID = window.setTimeout(showPage, 5000, list, 1);
	 } else {
		 for (let i = 0; i < list.length; i+=1)
			 list[i].style.display = "none";
		 showPage(matchesFoundArray, 1);
		//remove the pagination pages if they already exist after a search result is shown	
		let duplicatePaginationList = document.querySelector(".pagination-ul");
	
		if(duplicatePaginationList!== null) {
			duplicatePaginationList.parentNode.removeChild(duplicatePaginationList);
		}
		//set the first page link to active
		//let anchor = document.getElementsByTagName("A");
		
		/* var hyperLinkText = document.querySelectorAll("a").innerHTML;
		console.log("hyperlink text is " + hyperLinkText);
		
		if (hyperLinkText === "1"){
			hyperLinkeText.className = "active";
		} */
		/* var x = document.querySelector(".inactive");
		if (x.className = "inactive" && x.innerHTML === "1"){
			x.className = "active";		
		} */
		 
		appendPageLinks(matchesFoundArray); 	
	}
	 
}

appendPageLinks(allStudents);
showPage(allStudents, 1);


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






