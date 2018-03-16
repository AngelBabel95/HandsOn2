import { AppPage } from './app.po';

describe('hands-on2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('HandsOn2');
  });
});
