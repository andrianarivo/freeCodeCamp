import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Has Logo', async ({ page }) => {
  const logo = page.locator('a.universal-nav-logo');
  await expect(logo.first()).toBeVisible();
});
