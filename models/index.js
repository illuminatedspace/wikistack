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
		allowNull: false
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
	hooks: {
		beforeValidate: function() {
			var title = this.getDataValue('title');
			title = title.toLowerCase().split(' ');
			page.urlTitle = title.join('_');
		}
	}
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

module.exports = {
	Page: Page,
	User: User
};
