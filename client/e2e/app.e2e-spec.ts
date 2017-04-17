import { AuthMeanPage } from './app.po';

describe('auth-mean App', () => {
  let page: AuthMeanPage;

  beforeEach(() => {
    page = new AuthMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
