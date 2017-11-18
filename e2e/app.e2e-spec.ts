import { TulipeNoirPage } from './app.po';

describe('tulipe-noir App', () => {
  let page: TulipeNoirPage;

  beforeEach(() => {
    page = new TulipeNoirPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
