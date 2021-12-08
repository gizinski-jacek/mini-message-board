var express = require('express');
var router = express.Router();

const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

router.get('/new', (req, res, next) => {
	res.render('form', { title: 'New message' });
});

router.post('/new', (req, res, next) => {
	messages.push({
		text: req.body[`user-text`],
		user: req.body[`user-name`],
		added: new Date(),
	});
	res.redirect('/');
});

router.get('/', (req, res, next) => {
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = router;
