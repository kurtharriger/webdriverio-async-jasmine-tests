describe("Navigate to webdriver.io", function() {
  beforeAll(function(done) {
    browser.url('http://webdriver.io');
    done();
  });

  it("The title should be 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs'", function(done) {
    browser.getTitle().then(function(title) {
        expect(title).toBe('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
        done();
    });
  });

  it("This test should always fail", function(done) {
    browser.getTitle().then(function() {
        expect(false).toBe(true);
        done();
    });
  });
});
