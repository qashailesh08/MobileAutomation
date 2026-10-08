import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: "./tests",   // directory where we automate test cases
  platform: "android",  // plateform which we automate
  bundleId: "com.swaglabsmobileapp",  // set bundle id 
  deviceId: "53ae5cb7",
  deviceName:/.*/, // all device name
  deviceType:"real",
  // osVersion:"" ,// we can also leave it empty
  // installApps:"D:\\MobileTesting\\MobileAutomation\\App\\Android.SauceLabs.Mobile.Sample.app.2.7.1.apk",
  installApps:"D:/MobileTesting/MobileAutomation/App/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk",
  timeout:30000,
  retries:2,
  viewTree:"on-failure",
  reporter: [['html', { open: 'never' }]],
  fullyParallel:false,
});
