fetch('http://www.sharproot.com/wp-json/wp/v2/posts?categories=28') 
.then((resp) => resp.json())
.then(function(vendors) {
    var sipnner = document.getElementById("spinner");
    spinner.style.display="none";
    acceptVendors(vendors);
})
.catch(function() {
console.log("Husten, we have a problem.")
});

