let price = 1000;

function product(callback) {
    console.log("Product Price:", price);
    callback();
}

function discount(callback) {
    let discount = 20;

    price = price - (price * discount / 100);

    console.log("Discount:", discount + "%");
    callback();
}

function finalPrice(callback) {
    console.log("Final Price:", price);
    callback();
}

// Callback Hell

product(() => {

    discount(() => {

        finalPrice(() => {

            console.log("Process Completed");

        });

    });

});