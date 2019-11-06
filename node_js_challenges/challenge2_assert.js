// use hard assertion 
require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;

describe("challenge2 suite", function(){
   this.timeout(20000);
   var driver;
   before(function () {
       // initializing chrome driver
       driver = new webdriver.Builder()
       .withCapabilities(webdriver.Capabilities.chrome())
       .build();
   });



   after(function () {
       return driver.quit();
   });

   it("I open the copart website", function() {
       return driver.get("http://www.copart.com");
   });

   it("These cars are 'exotics'", function() {
       return driver.getTypes().then(function(Types) {
           assert.equal(Types, "exotics");
       });
   });

   it("This verifies 'Porsche'", function() {
       return driver.getMakes().then(function(Makes) {
            assert.equal(Makes, "Porsche")
       });
   });


});