var UserView = function UserView(user) {
	var dom = new Dom();

	var appendTo = function(parentNodeSelector) {
		dom.add(parentNodeSelector, {
			tagName: 'div',
			attributes: {
				id: 'user-' + user.get('username')
			}
		});

		dom.add('#user-' + user.get('username'), {
			tagName: 'div',
			attributes: {
				textContent: user.get('firstName') + ' ' +
					user.get('lastName') + ' (' +
					user.get('username') + ')'
			}
		});

		dom.add('#user-' + user.get('username'), {
			tagName: 'div',
			attributes: {
				id: 'detail-' + user.get('username')
			}
		});

		dom.add('#detail-' + user.get('username'), {
			tagName: 'a',
			attributes: {
				href: '',
				textContent: 'Details'
			}
		});

		dom.add('#detail-' + user.get('username'), {
			tagName: 'button',
			attributes: {
				textContent: 'Delete'
			}
		});

		dom.on('#detail-' + user.get('username') + ' a', 'click', viewDetails);
		dom.on('#detail-' + user.get('username') + ' button', 'click', deleteView);
	};

	var viewDetails = function(event) {
		var details = 'User details:\n'

		for (attr in user) {
			if (user.hasOwnProperty(attr)) {
				details += attr + ' : ' + user[attr] + '\n';
			}
		}

		console.log(details);
		event.preventDefault();
	};

	var deleteView = function() {
		dom.remove('#user-' + user.get('username'));
	};

	return {
		appendTo: appendTo
	};
};

window.addEventListener('load', function() {
	var user01 = new User({
		firstName: 'daniel',
		lastName: 'echevarria',
		username: 'alexech1989',
		email: 'danielechevarria199@gmail.com'
	}),
		view01 = new UserView(user01),
		user02 = new User({
		firstName: 'luke',
		lastName: 'skywaker',
		username: 'lukesky',
		email: 'lukesky@starwars.net'
	}),
		view02 = new UserView(user02);;

	view01.appendTo('#users');
	view02.appendTo('#users');
});

