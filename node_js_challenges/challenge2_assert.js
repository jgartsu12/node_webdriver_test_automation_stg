// use hard assertion 
import 'chromedriver';
import { Builder, Capabilities } from 'selenium-webdriver';
import { assert } from "chai";

describe("challenge2 suite", function(){
   this.timeout(20000);
   var driver;
   before(function () {
       driver = new Builder()
       .withCapabilities(Capabilities.chrome())
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