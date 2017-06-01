import { Geonature2Page } from './app.po';

describe('geonature2 App', () => {
  let page: Geonature2Page;

  beforeEach(() => {
    page = new Geonature2Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
