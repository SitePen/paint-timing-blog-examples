const {json} = require('micro');

module.exports = async req => {
	console.dir(await json(req), {colors: true});
	return 200;
};
