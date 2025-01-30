import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { BrowserContext, Page, PlaywrightTestOptions,  } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { SearchResultsPage } from '../../page-objects/SearchResultsPage';

export interface CucumberWorldConstructorParams {
  parameters: Record<string, string>;
}

export interface ICustomWorld extends World {
  debug: boolean;
  feature?: messages.Pickle;
  context?: BrowserContext;
  page?: Page;
  testName?: string;
  startTime?: Date;
  username?: string;
  playwrightOptions?: PlaywrightTestOptions;
  homePage?: HomePage;
  searchResultsPage?: SearchResultsPage;
}

export class CustomWorld extends World implements ICustomWorld {
  homePage?: HomePage;
  searchResultsPage?: SearchResultsPage;
  constructor(options: IWorldOptions) {
    super(options);
  }

  debug = false;
}

setWorldConstructor(CustomWorld);
