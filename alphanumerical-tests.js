const { expect } = require('chai');

function isAlphaNumeric(n) {
    const alphanumericRegex = /^[A-Za-z0-9\s\+\-]+$/;
    return alphanumericRegex.test(n);
}
 
describe('alphanumeric', () => {
    it('should check if the value is alphanumeric (numeric value)', () => {
      const result = isAlphaNumeric(3);
      expect(result).to.equal(false); 
    });

    it('should check if the value is alphanumeric (numeric string)', () => {
        const result = isAlphaNumeric('33');
        expect(result).to.equal(true);  
      });

    it('should check if the value is alphanumeric (special character)', () => {
        const result = isAlphaNumeric('/');
        expect(result).to.equal(false); 
      });

    it('should check if the value is alphanumeric (letter)', () => {
        const result = isAlphaNumeric('a');
        expect(result).to.equal(true); 
      });

    it('should check if the value is alphanumeric (space)', () => {
        const result = isAlphaNumeric(' ');
        expect(result).to.equal(true); 
      });
});
