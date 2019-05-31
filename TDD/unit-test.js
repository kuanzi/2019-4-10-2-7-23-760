const main = require('../main/main');

describe('taxi fee', function () {
    it('within 2km and no parking' , function() {
        let inputs = {distance:1,parkTime:0};
        let summary = main(inputs);
        let expected = 6;
        expect(summary).toEqual(expected);
    });

    it('more than 2km and no parking' , function() {
        let inputs = {distance:7,parkTime:0};
        let summary = main(inputs);
        let expected = 10;
        expect(summary).toEqual(expected);
    });
});
