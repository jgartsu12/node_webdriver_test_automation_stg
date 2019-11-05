require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;

describe("challenge1 suite", function(){
    this.timeout(20000);
    var driver;
    before (function() {
        // initialize chrome driver
        driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    });


    after (function () {
        return driver.quit();
    });
});
