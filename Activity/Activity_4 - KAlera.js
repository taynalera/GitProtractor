
describe('Activity 4',function() {  

    var EC = protractor.ExpectedConditions;
    var username = element(by.id("username"));
    var password = element(by.name("password"));
    var location = element(by.id("Outpatient Clinic"));
    var login = element(by.id("loginButton"));
    var register = element(by.css("i[class='icon-user']"));
    var given = element(by.name("givenName"));
    var family = element(by.name("familyName"));
    var day = element(by.id("birthdateDay-field"));
    var patient = element(by.css("ul[id='breadcrumbs'] li:nth-child(2)"));
    var year = element(by.id("birthdateYear-field"));
    var address1 = element(by.id("address1"));
    var phone = element(by.name("phoneNumber"));
    var next = element(by.id("next-button"));
    var submit = element(by.id("submit"));
    var person = element(by.css("input[placeholder='Person Name']"));
    var view = "OpenMRS Electronic Medical Record";
    var check1 = element(by.css("#error-message"));
    var error1 = "Invalid username/password. Please try again.";
    var check2 = element(by.id("sessionLocationError"));
    var error2 = "You must choose a location!";

    beforeAll(() => { 
        console.log('Start Activity 4 Suite');
    });

    //Start Notification for Spec
    beforeEach(()=> { 
		console.log('Start Test');
	});

    it('Test Login Success',function() {
    
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();

        browser.get("https://qa-refapp.openmrs.org/openmrs/login.htm");

        username.sendKeys("admin");
        password.sendKeys("Admin123");
        location.click();
        login.click().then(function()
        {
            console.log("========== TEST CASE 1.1: LOGIN SUCCESSFULLY ==========");

            browser.getTitle().then(function(title){
                if (title == "Home")
                {
                    console.log("Login Success. This is the " + title + " page");
                }
            })
        })

        register.click().then(function(){

            console.log("========== TEST CASE 1.2: REGISTER A PATIENT ==========");
            given.sendKeys("Tester");
            family.sendKeys("Protractor");
            next.click().then(function(){
                element(by.cssContainingText("[id='gender-field'] option","Female")).click();
                next.click().then(function(){
                    day.sendKeys("1");
                    element(by.cssContainingText("[id='birthdateMonth-field'] option","December")).click();
                    year.sendKeys("1995");
                    next.click().then(function(){
                        address1.sendKeys("Manila");
                        next.click().then(function(){
                            phone.sendKeys("123456789");
                            next.click().then(function(){
                                element(by.cssContainingText("[id='relationship_type'] option","Sibling")).click();
                                person.sendKeys("Sample Protractor");
                                next.click().then(function(){
                                    submit.click().then(function(){
                                        browser.wait(EC.visibilityOf(element(by.css("div[class='float-sm-right'] em"))), 10000);
                                        browser.getTitle().then(function(title){
                                            if (title == view)
                                            {
                                                patient.getText().then(function(text)
                                                {
                                                    expect(text).toEqual("Tester Protractor");
                                                    console.log(title + " for patient " + text);
                                                })
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    it('Test Login Fail',function() {
    
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get("https://demo.openmrs.org/openmrs/login.htm");
        username.sendKeys("admin");
        password.sendKeys("Admin123");
        login.click().then(function()
        {
            check2.getText().then(function(text)
            {
                console.log("========== TEST CASE 2.1: FAILED LOGIN DUE TO NO LOCATION ==========");

                expect(text).toEqual(error2);
                console.log("Error displayed: " + text);
            })
            
        })
        username.clear().then(function(){

            console.log("========== TEST CASE 2.2: FAILED LOGIN DUE TO INCORRECT NAME OR PASSWORD ==========");

            username.sendKeys("admin1");
            location.click();
            login.click().then(function()
            {
                check1.getText().then(function(text)
                {
                    expect(text).toEqual(error1);
                    console.log("Error displayed: " + text);
                })
            })
        });
       
    })

     //End Notification for Spec
     afterEach( () =>{ 
		console.log('End Test');
	});

    //End Notification for Suite
    afterAll(() => { //afterAll function
        console.log('End Activity 4 Suite');
    });
})
   