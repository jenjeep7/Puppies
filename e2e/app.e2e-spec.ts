import { PuppiesPage } from './app.po';

describe('puppies App', () => {
  let page: PuppiesPage;

  beforeEach(() => {
    page = new PuppiesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
