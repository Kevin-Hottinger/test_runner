var calculator = function() {
	// Set default values
	this.val1 = 0;
	this.val2 = 0;
};

// Update stored user values
calculator.prototype.set_val = function(num1, num2) {
	this.val1 = num1;
	this.val2 = num2;
};

// Add entered values
//calculator.prototype.add_it = function() { return this.val1 + this.val2; };

// Subtract entered numbers
//calculator.prototype.sub_it = function() { return this.val1 - this.val2; };

// Multiply entered numbers
//calculator.prototype.mul_it = function() { return this.val1 * this.val2; };

// Divide entered numbers
//calculator.prototype.div_it = function() { return this.val1 / this.val2; };
