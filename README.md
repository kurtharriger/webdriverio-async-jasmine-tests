# webdriverio-test

This project provides a failing example demonstrating that jasmine tests
currently do not work in webdriverio test runner when webdriverio is configured
with `sync: false`

# Running tests

Start Selenium in another window
```
npm install -g selenium-standalone
selenium-standalone install
selenium-standalone start
```

# Run synchronous test suite
Expected and Actual: 1 test should pass and one test should always fail.

```
npm run sync
```

# Run asynchronous test suite

Expected: That 1 tests should pass and 2 test should always fail.

```
npm run async
```
