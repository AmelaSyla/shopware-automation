# Shopware 6 Automation Test

## Project Description
This project contains an automated end-to-end test for a guest checkout flow using Playwright.

## Test Case
- Open storefront
- Navigate to Clothing category
- Add product to cart
- Proceed to checkout as guest
- Fill checkout form
- Select Cash on Delivery
- Confirm order

## Framework
- Playwright (JavaScript)

## Project Structure

```txt
shopware-automation/
├── tests/
│   └── checkout.spec.js
├── playwright.config.js
├── package.json
├── README.md
├── .gitignore
```

## How to install
```txt
npm install
npx playwright install
```
## How to run tests
npx playwright test

## Target environment
https://www.shopware6-demo.development-s25.com/

## What could be improved
- Implement Page Object Model (POM)
- Add CI/CD pipeline using GitHub Actions
- Add test data management (fixtures)
- Improve selectors using data-testid if available
