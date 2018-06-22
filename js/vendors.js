var row = document.getElementById("vendor-row");

function acceptVendors(vendors) {
    row.innerHTML="";
    for (var i = 0; i < vendors.length; i++) {
        var vendor = `
            <div class="col-md-4 pb-1 pb-md-0 ">
                <div class="card">
                    <img class="card-img-top" src="${vendors[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${vendors[i].title.rendered}</h3>
                        <p>${vendors[i].excerpt.rendered}</p>
                    </div>
                </div>
            </div>
        `;
        row.innerHTML += vendor;

    }
}


