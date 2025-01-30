import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByLabel('AM Quartex logo');
    this.searchInput = page.getByLabel('Search digital collections');
    this.searchButton = page.locator('button[aria-label="Search the site"]');
  }

  async gotToBaseUrl(url: string) {
    await this.page.goto(url);
  }

  async assertLogoIsVisible() {
    await this.logo.isVisible();
  }

  async fillSearchTerm(term: string) {
    await this.searchInput.fill(term);
  }

  async clickSearch() {
    await this.searchButton.click();
  }
}
