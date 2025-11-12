const { test, expect } = require('@playwright/test');

test.describe('Screenshot тести для сторінки "Про нас"', () => {

  // Тест 1: Скріншот всієї сторінки
  test('Скріншот всієї сторінки "Про нас"', async ({ page }) => {
    await page.goto('/about.html');
    expect(await page.screenshot()).toMatchSnapshot('screenshots/custom/about-page.png');
  });

  // Тест 2: Скріншот окремого елемента (заголовок)
  test('Скріншот заголовка H1', async ({ page }) => {
    await page.goto('/about.html');
    const element = await page.locator('h1'); 
    expect(await element.screenshot()).toMatchSnapshot('screenshots/custom/about-header.png');
  });

});