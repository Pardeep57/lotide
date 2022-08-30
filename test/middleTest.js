const assertEqual = require('../assertEqual');
const middle = require('../middle');


assertEqual(middle([1,2,3]),2);

assertEqual(middle([1,2,3,4,5]),3);
