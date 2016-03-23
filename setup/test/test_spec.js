describe("Update stored user values:", function() {
	var calc;
	beforeEach(function() {
    	calc = new calculator();
    });

	it("val1 = 8 && val2 = 10", function() {
		expect(calc.val1 === 0 && calc.val2 === 0).toBeTruthy();
		calc.set_val(8, 10);
		expect(calc.val1 === 8 && calc.val2 === 10).toBeTruthy();
	});

	it("val1 = 14 && val2 = 62", function() {
		expect(calc.val1 === 0 && calc.val2 === 0).toBeTruthy();
		calc.set_val(14, 62);
		expect(calc.val1 === 14 && calc.val2 === 62).toBeTruthy();
	});

});

/*
describe("Addition checks:", function() {
	var calc, test;

	// Create a new instance of calculator before each test
	beforeEach(function() {
    	calc = new calculator();
    });

	it("5 + 5 = 10", function() {
		// Update the input numbers
		calc.set_val(5, 5);
		// Run functionality
		test = calc.add_it();
		// Test result
		expect(test).toBe(10);
	});

	it("1 + 7 = 8", function() {
		calc.set_val(1, 7);
		test = calc.add_it();
		expect(test).toBe(8);
	});
});
*/

/*
describe("Subtraction checks:", function() {

	var calc, test;

	beforeEach(function() {
    	calc = new calculator();
    });

	it("15 - 10 = 5", function() {
		calc.set_val(15, 10);
		test = calc.sub_it();
		expect(test).toBe(5);
	});

	it("19 - 7 = 12", function() {
		calc.set_val(19, 7);
		test = calc.sub_it();
		expect(test).toBe(12);
	});
});
*/

/*
describe("multiply checks:", function() {

	var calc, test;

	beforeEach(function() {
    	calc = new calculator();
    });

	it("10 * 10 = 100", function() {
		calc.set_val(10, 10);
		test = calc.mul_it();
		expect(test).toBe(100);
	});

	it("5 * 8 = 40", function() {
		calc.set_val(5, 8);
		test = calc.mul_it();
		expect(test).toBe(40);
	});
});
*/

/*
describe("Divide checks:", function() {

	var calc, test;

	beforeEach(function() {
    	calc = new calculator();
    });

	it("10 / 2 = 5", function() {
		calc.set_val(10, 2);
		test = calc.div_it();
		expect(test).toBe(5);
	});

	it("40 / 10 = 4", function() {
		calc.set_val(40, 10);
		test = calc.div_it();
		expect(test).toBe(4);
	});
});
*/
