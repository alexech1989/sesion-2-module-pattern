var User = function User(attributes) {
	this.firstName = attributes.firstName;
	this.lastName = attributes.lastName;
	this.username = attributes.username;
	this.email = attributes.email;
};

User.prototype.get = function(attribute) {
	if (this.hasOwnProperty(attribute)) {
		return this[attribute];
	}
};

User.prototype.set = function(attribute, value) {
	if (this.hasOwnProperty(attribute)) {
		this[attribute] = value;
	}
};

