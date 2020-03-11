<script type="text/javascript">

function getElementsByClassName(className) {
    var found = [];
    var elements = document.getElementsByTagName("*");
    for (var i = 0; i < elements.length; i++) {
        var names = elements[i].className.split(' ');
        for (var j = 0; j < names.length; j++) {
            if (names[j] == className) found.push(elements[i]);
        }
    }
    return found;
}

var x = getElementsByClassName("ms-vb2");

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 5000); // Change image every 5 seconds
}

</script>