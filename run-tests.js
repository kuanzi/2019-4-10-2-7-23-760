const Jasmine = require('jasmine');
const jasmine = new Jasmine();

// jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.loadConfigFile('TDD/support/jasmine.json');

jasmine.execute();