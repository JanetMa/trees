require("../person");
require("C:/Program Files/nodejs/node_modules/npm/node_global/node_modules/chai").should();

describe("Person", function(){
	it("greets people", function(){
		var p1 = new Person("Jeff"),
			p2 = new Person("Collis");
			
		p1.greet(p2).should.equal("Hello, Collis!");
		});
		
		it("greets strings", function(){
		var p1 = new Person("Jeff");
		p1.greet("Collis").should.equal("Hello, Collis!");
		});
		
	});
		
		