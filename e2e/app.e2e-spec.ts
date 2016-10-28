import { CrudPage } from './app.po';

describe('crud App', function() {
  let page: CrudPage;

  beforeEach(() => {
    page = new CrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
