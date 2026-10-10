// this is a skeleton test for mobilewright (see https://github.com/mobile-next/mobilewright/blob/main/README.md)
// for documentation see: https://mobilewright.dev/docs/
// for agent skill see: https://github.com/mobile-next/mobilewright-skill
import { test, expect } from '@mobilewright/test';
import { secureHeapUsed } from 'crypto';
import { Locator } from 'mobilewright';

test('app launches and shows home screen @Smoke', async ({ screen, device }) => {
  // await expect(screen.getByText('Welcome')).toBeVisible();

  // const loUsername: Locator = screen.getByRole('textfield', { name: 'test-Username' });
  // await loUsername.fill("standard_user");

  // const locPassword: Locator = screen.getByRole('textfield', { name: 'test-Password' });
  // await locPassword.fill("secret_sauce");

  // await screen.getByLabel('test-LOGIN').tap();

});


// test('Invalid Login @Smoke', async ({ screen, device }) => {
//   // await expect(screen.getByText('Welcome')).toBeVisible();
//   await screen.getByLabel('test-LOGIN').tap();

//   const text: Locator = screen.getByRole('text', { name: 'Username is required' });

//   if ((await text.getText()).match("Username is required")) {
//     console.log("Passed");
//   } else {
//     console.log("Failed");
//   }

// });


// test('Add To Card', async ({ screen, device }) => {
//   const loUsername: Locator = screen.getByRole('textfield', { name: 'test-Username' });
//   await loUsername.fill("standard_user");

//   const locPassword: Locator = screen.getByRole('textfield', { name: 'test-Password' });
//   await locPassword.fill("secret_sauce");

//   await screen.getByLabel('test-LOGIN').tap();

//   await screen.getByRole('textfield', { name: 'test-Password' }).tap();
//   // Add to card history
//   await screen.getByLabel('test-Login').tap();
//   // Check Out
//   await screen.getByRole('list', { name: 'test-Login' }).tap();
//   // first Name
//   const firstName: Locator = screen.getByRole('textfield', { name: 'test-Username' });
//   await firstName.fill("Jack");

//   // Last Name
//   const lastName: Locator = screen.getByRole('textfield', { name: 'test-Password' });
//   await lastName.fill("Hanma");

//   await screen.getByLabel('test-biometry').fill("222201");

//   await screen.getByRole('list', { name: 'test-Login' }).tap();


//   await screen.getByRole('list', { name: 'test-Login' }).tap();

//   await screen.getByRole('list', { name: 'test-Login' }).tap();

// }
// );