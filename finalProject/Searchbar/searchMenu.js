 // Thomas Lønning
 // Search menu
function myFunction() {
    // First i declare the variables used and after giving them an ID
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
    console.log(input.value)



    // Second, i make a loop that that goes threw the list items, and filter out the ones that doesnt match the search
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
                document.getElementById("result").style.display = "block";
            }   else

                li[i].style.display = "none";
        }
}

 // here i wanted to make a loop that make sure the entire list doesnt show in the filter list
for( i = 0; i <= 13; i++){
    if(input.value){
        document.getElementById("input + i").style.display = "block";
    }
}

console.log(document.getElementById("input0"));








































