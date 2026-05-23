import { test, expect } from '@playwright/test';

test('should complete guest checkout with Cash on Delivery successfully', async ({ page }) => {

  await page.goto('https://www.shopware6-demo.development-s25.com/');

  await expect(page).toHaveURL(/shopware6-demo/);
  await expect(page.getByLabel('Hauptnavigation')).toBeVisible();

  const clothingLink = page.getByRole('link', { name: /Clothing/i }).first();

  await expect(clothingLink).toBeVisible({ timeout: 15000 });
  await clothingLink.click();

  await expect(page).toHaveURL(/Clothing/i);

  const addToCartBtn = page.getByRole('button', { name: 'In den Warenkorb' }).first();

  await expect(addToCartBtn).toBeVisible({ timeout: 15000 });
  await addToCartBtn.click();

  const checkoutBtn = page.getByRole('link', { name: 'Zur Kasse' });

  await expect(checkoutBtn).toBeVisible({ timeout: 10000 });
  await checkoutBtn.click();

  await expect(page).toHaveURL(/checkout/);

  await page.getByRole('textbox', { name: 'Vorname' }).fill('Amela');
  await page.getByRole('textbox', { name: 'Nachname' }).fill('Syla');
  await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill('amela.syla@student.uni-pr.edu');

  await page.getByRole('textbox', { name: 'Straße und Hausnummer' }).fill('Shala e Bajgores, 262');
  await page.getByRole('textbox', { name: 'PLZ' }).fill('40000');
  await page.getByRole('textbox', { name: 'Ort' }).fill('Mitrovicë');

  await page.getByRole('group', { name: 'Ihre Adresse' })
    .getByLabel('Bundesland')
    .selectOption({ index: 1 });

  const continueBtn = page.getByRole('button', { name: 'Weiter' });

  await expect(continueBtn).toBeVisible();
  await continueBtn.click();

  await page.getByRole('checkbox', {
    name: 'Ich habe die AGB gelesen und'
  }).check();

  await page.getByRole('radio', { name: 'Cash on delivery' }).check();

  const orderBtn = page.getByRole('button', {
    name: 'Zahlungspflichtig bestellen'
  });

  await expect(orderBtn).toBeVisible({ timeout: 10000 });
  await orderBtn.click();

  await expect(
    page.getByText(/Vielen Dank für Ihre Bestellung bei Shopware 6 Demo Shop - solution25!/i)
  ).toBeVisible({ timeout: 20000 });

});