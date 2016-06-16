describe("Navigate to webdriver.io", function() {
  beforeAll(function() {
    browser.url('http://webdriver.io');
  });

  it("The title should be 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs'", function() {
    const title = browser.getTitle();
    expect(title).toBe('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
  });

  it("This test should always fail", function() {
    expect(false).toBe(true);
  });
});
