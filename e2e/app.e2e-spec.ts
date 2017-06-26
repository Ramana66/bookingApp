import { BookingAppPage } from './app.po';

describe('booking-app App', function() {
  let page: BookingAppPage;

  beforeEach(() => {
    page = new BookingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
