import { HongKongGdgPage } from './app.po';

describe('hong-kong-gdg App', function() {
  let page: HongKongGdgPage;

  beforeEach(() => {
    page = new HongKongGdgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
