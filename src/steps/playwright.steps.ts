import { ICustomWorld } from '../support/custom-world';
import { config } from '../support/config';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';


Given('user is on any page of the Quartex Published Site', async function (this: ICustomWorld) {
  await this.homePage?.gotToBaseUrl('https://demo.quartexcollections.com/');
  await this.homePage?.assertLogoIsVisible();
});


When('user enters valid search term in the basic search input box', async function () {
  const { page } = this;
  const searchTerm = 'Shakespeare';
  const searchInput = page.getByLabel('Search digital collections'); 
  await searchInput.fill(searchTerm);
});

Then('the search button is clicked', async function () {
  const { page } = this;
  const searchButton = page.locator('button[aria-label="Search the site"]');
  await searchButton.click();
});

Then('user is navigated to the Browse All page', async function () {
  const { page } = this;
  await expect(page).toHaveTitle('Browse All - Demo');
});

Then('the first page of search results is displayed', async function () {
   const { page } = this;
  const firstPagination = page.locator('div[class="media-list__top-pagination-info bold"]').first();
  await expect(firstPagination).toContainText('1-30');
});

Then('the assets listed meet the search criteria', async function () {
  const { page } = this;
const resultsContainer = page.locator('ul.media-list__items[data-testid="documentSearchResultContainer"]');
await expect(resultsContainer).toContainText('Shakespeare');
});


