var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
	logging: false
});

var Page = db.define('page', {
	title: {
		type: Sequelize.STRING,
		allowNull: false,
		isAlphanumeric: true,

	},
	urlTitle: {
		type: Sequelize.STRING,
		//allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false,
		defaultValue: 'This article is empty. \n You can help by contributing!'
	},
	status: {
		type: Sequelize.ENUM('open', 'closed'),
		defaultValue: 'open'
	},
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	}
},
{
	getterMethods: {
		route: function() {
			var urlTitle = this.getDataValue('urlTitle');
			return '/wiki/' + urlTitle;
		}
	},
	// hooks: {
	// 	beforeValidate: function(page, options) {
	// 		page.urlTitle = generateUrl(page.title);
	// 	}
	// }
}
);

var User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		isEmail: true
	}
});

function generateUrl(title) {
  if (title) {
    const notWords = /\W/ig;
    const whitespace = /\s+/g;
    return title.replace(notWords, '').replace(whitespace, '_');
  } else {
    return Math.random().toString(36).substring(2, 7);
  }
}

module.exports = {
	Page: Page,
	User: User
};
