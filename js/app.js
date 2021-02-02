window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });

// var search = new Filter('search', 'data-caption');

document.getElementById('search').addEventListener("keyup", searchFilter);


function searchFilter() {
    var searchInput = document.getElementById('search'); //sets input variabnle to the search box
    var image = document.getElementsByTagName('img');
    filter = searchInput.value.toLowerCase(); // sets filter to the value of whats being typed into the input box/search box

    for (var i = 0; i < 12; i++) { // Loop through the img tags and assigning the alt tags to variable altname 
        var altName = image[i].getAttribute('alt'); // sets altText to the image in the loop at position i 
        var altText = altName;

        if (altText.toLowerCase().includes(filter)) { // if the alt attr of an img tag contains the value of the search box text being input
            image[i].style.display = "";
        } else {
            image[i].style.display = "none";
        }
    }
}
