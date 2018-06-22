document.getElementById("dropdown").addEventListener("change",filter);

function filter(event){
    console.log(event.target.value);
    var new_vendors = [];

    for (var i = 0; i<vendors_master.length;i++){


        var vendor = vendors_master [i];
        if (vendor.tags[0] == event.target.value){

            new_vendors.push(vendor);
        }
    }
    
    acceptVendors(new_vendors);


}