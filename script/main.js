var newItemCounter = 1;
var ourList = document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
var listItems = document.getElementById("our-list").getElementsByTagName("li");
var secondButton = document.getElementById("displaymessage");

/* Example of changing all the elements in listItems to Hello World.
for (i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = "Hello world."
}
*/

ourList.addEventListener("click", activateItem);

// LIsten for incomming clicks
/*for (i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", activateItem);
}
*/

// Event delegation

function activateItem(e) {
    if (e.target.nodeName == "LI") {
        
    ourHeadline.innerHTML = e.target.innerHTML;
    for (i = 0; i < e.target.parentNode.children.length; i++) {
        e.target.parentNode.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
    }
}

ourButton.addEventListener("click", createNewItem)
secondButton.addEventListener("click",messageFunc)

function messageFunc() {
    alert("You pressed the message button!");
}

function createNewItem() {
    ourList.innerHTML += "<li>something new " + newItemCounter + "</li>";
    newItemCounter++;
}