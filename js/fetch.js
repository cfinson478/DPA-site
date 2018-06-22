var vendors_master
fetch('http://www.sharproot.com/wp-json/wp/v2/posts?categories=28&_embed') 
.then((resp) => resp.json())
.then(function(vendors) {
    var spinner = document.getElementById("spinner");
    spinner.style.display="none";
    acceptVendors(vendors);
    vendors_master = vendors;
})
.catch(function() {
console.log("Husten, we have a problem.")
});

