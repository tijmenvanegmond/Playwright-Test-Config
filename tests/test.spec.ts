import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.setContent('<button data-custom="myButton">Click me</button>');
});

