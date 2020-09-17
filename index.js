function myFunction() {
    document.getElementById("demo").style.display = "Enter KeyWord"
}

function myFunctionTwo() {
    document.getElementById("demoTwo").style.display = "Search Option: Search by Client"
}
function myFunctionThree() {
    document.getElementById("demo").style.display = "Search Option: Recently Added"
}
//alert("Welcome to the Document Searcher")
//var x = 9%2;
//console.log(x);
//var searchoption =  prompt("Enter Keyword Below");
//document.getElementById("demo").innerHTML = searchoption;

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();