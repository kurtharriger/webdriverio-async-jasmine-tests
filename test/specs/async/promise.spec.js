describe("Navigate to webdriver.io", function() {
  beforeAll(function() {
    return browser.url('http://webdriver.io');
  });

  // beforeEach(function() {
  //   throw new Error('everything should fail')
  // });

  it("The title should be 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs'", function() {
    return browser.getTitle().then(function(title) {
        expect(title).toBe('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
  });

  it("This test should always fail", function() {
    return browser.getTitle().then(function() {
        expect(false).toBe(true);
    });
  });

  it("This test should fail with exception", function() {
    throw new Error('fail test')
  })


});
