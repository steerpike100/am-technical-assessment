// File: src/pages/search-results-page.ts
import { Page, Locator, expect } from '@playwright/test';

export class SearchResultsPage {
  readonly page: Page;
  readonly paginationInfo: Locator;
  readonly resultsContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.paginationInfo = page.locator('div.media-list__top-pagination-info.bold').first();
    this.resultsContainer = page.locator('ul.media-list__items[data-testid="documentSearchResultContainer"]');
  }

  async expectTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }

  async expectFirstPageOfResults() {
    // Checks that the pagination info contains "1-30"
    await expect(this.paginationInfo).toContainText('1-30');
  }

  async expectResultsContain(term: string) {
    await expect(this.resultsContainer).toContainText(term);
  }
}
