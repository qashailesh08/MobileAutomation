// this is a skeleton test for mobilewright (see https://github.com/mobile-next/mobilewright/blob/main/README.md)
// for documentation see: https://mobilewright.dev/docs/
// for agent skill see: https://github.com/mobile-next/mobilewright-skill
import { test, expect } from '@mobilewright/test';
import { secureHeapUsed } from 'crypto';
import { Locator } from 'mobilewright';

test('app launches and shows home screen @Smoke', async ({ screen, device }) => {
  // await expect(screen.getByText('Welcome')).toBeVisible();

  const loUsername: Locator = screen.getByRole('textfield', { name: 'test-Username' });
  await loUsername.fill("standard_user");

  const locPassword: Locator = screen.getByRole('textfield', { name: 'test-Password' });
  await locPassword.fill("secret_sauce");

  await screen.getByLabel('test-LOGIN').tap();

});


test('Invalid Login @Smoke', async ({ screen, device }) => {
  // await expect(screen.getByText('Welcome')).toBeVisible();
  await screen.getByLabel('test-LOGIN').tap();

  const text: Locator = screen.getByRole('text', { name: 'Username is required' });

  if ((await text.getText()).match("Username is required")) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }

});