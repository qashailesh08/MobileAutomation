import { test } from "@mobilewright/test";
import { log } from "console";

test("Add item to card", async ({ screen }) => {

    let productNme = screen.getByTestId('com.saucelabs.mydemoapp.android:id/productTV');

    if ((await productNme.getText()).match("Products")) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }

    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/productIV').tap();
    await screen.getByRole('text', { name: '1' }).tap();

    await screen.getByText('Add to cart').tap();
    await screen.getByRole('listitem', { name: 'Displays number of items in your cart' }).tap();

    await screen.getByText('Remove Item').tap();

    let empty = screen.getByText('Oh no! Your cart is empty. Fill it up with swag to complete your purchase.');
    if ((await empty.getText()).match("Oh no! Your cart is empty. Fill it up with swag to complete your purchase.")) {
        console.log("Shopping Card is Empty");
    } else {
        console.log("Shopping Card has Items");
    }
});

test("Proceed to Checkout", async ({screen})=>{
     let productNme = screen.getByTestId('com.saucelabs.mydemoapp.android:id/productTV');

    if ((await productNme.getText()).match("Products")) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }

    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/productIV').tap();
    await screen.getByRole('text', { name: '1' }).tap();

    await screen.getByText('Add to cart').tap();
    await screen.getByRole('listitem', { name: 'Displays number of items in your cart' }).tap();
    await screen.getByLabel('Confirms products for checkout').tap();
    // User Name
    await screen.getByRole('textfield').fill("bod@example.com");
    // User Password
    await screen.getByTestId('com.saucelabs.mydemoapp.android:id/passwordET').fill("10203040");
    // Login Button
    await screen.getByRole('button', { name: 'Tap to login with given credentials' }).tap();
    
});