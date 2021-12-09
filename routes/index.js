var express = require('express');
var router = express.Router();

const messages = [
	{
		user: 'Amando',
		date: new Date(),
		text: 'Hi there!',
	},
	{
		user: 'Charles',
		date: new Date(),
		text: 'Hello World!',
	},
];

router.get('/new', (req, res, next) => {
	res.render('form', { title: 'New message' });
});

router.post('/new', (req, res, next) => {
	messages.push({
		text: req.body[`user-text`],
		user: req.body[`user-name`],
		date: new Date(),
	});
	res.redirect('/');
});

router.get('/', (req, res, next) => {
	const sorted = messages.sort((a, b) => {
		return new Date(b.date) - new Date(a.date);
	});
	res.render('index', { title: 'Mini Message Board', messages: sorted });
});

module.exports = router;
