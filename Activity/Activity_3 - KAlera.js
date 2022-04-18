describe('Test Suite', function() {

    //Start Notification for Suite
    beforeAll(() => { 
        console.log('Start Suite');
    });

    //Start Notification for Spec
    beforeEach(()=> { 
		console.log('Start Test');
	});

    //Get the Sum of 2 numbers
    it('Add Spec', function() {

        var num1, num2, result;
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        result = num1 + num2;
        console.log("The Sum of " + num1 + " and " + num2 + " is " + result);
        if(result > 1){
            console.log("Above")
        }
        else{
            console.log("Below")
        }
    })

    //Get the Difference of 2 numbers
    it('Subtract Spec', function() {

        var num1, num2, result;
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        result = num1 - num2;
        console.log("The Difference of " + num1 + " and " + num2 + " is " + result);
        if(result > 1){
            console.log("Above")
        }
        else{
            console.log("Below")
        }
    })

    //Get the Product of 2 numbers
    it('Multiply Spec', function() {

        var num1, num2, result;
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        result = num1 * num2;
        console.log("The Product of " + num1 + " and " + num2 + " is " + result);
        if(result > 1){
            console.log("Above")
        }
        else{
            console.log("Below")
        }
    })

    //Get the Quotient of 2 numbers
    it('Divide Spec', function() {

        var num1, num2, result;
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        result = num1 / num2;
        console.log("The Quotient of " + num1 + " and " + num2 + " is " + result);
        if(result > 1){
            console.log("Above")
        }
        else{
            console.log("Below")
        }
    })

    //End Notification for Spec
    afterEach( () =>{ 
		console.log('End Test');
	});

    //End Notification for Suite
    afterAll(() => { //afterAll function
        console.log('End Suite');
    });

})