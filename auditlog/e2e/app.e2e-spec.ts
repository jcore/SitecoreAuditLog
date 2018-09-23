import { AppPage } from './app.po';

describe('auditlog App', () => {
  let page: AuditLogAppPage;

  beforeEach(() => {
    page = new AuditLogAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
