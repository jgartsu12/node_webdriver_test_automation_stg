import 'chromedriver';
import { Builder, Capabilities } from 'selenium-webdriver';
import { assert } from "chai";

describe("challenge1 suite", function(){
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

   it("I open the google website", function() {
       return driver.get("http://www.google.com");
   });

   it("The title is 'Google'", function() {
       return driver.getTitle().then(function(title) {
           assert.equal(title, "Google");
       });
   });


});

