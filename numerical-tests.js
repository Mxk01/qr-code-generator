const { expect } = require('chai');

function isNumeric(n) {
  return !isNaN(n);
}

describe('numeric', () => {
  it('should check if the input value is numerical (positive integer)', () => {
    const result = isNumeric(3);
    expect(result).to.equal(true);
  });

  it('should check if the input value is numerical (negative integer)', () => {
    const result = isNumeric(-5);
    expect(result).to.equal(true);
  });

  it('should check if the input value is numerical (floating-point number)', () => {
    const result = isNumeric(3.14);
    expect(result).to.equal(true);
  });

  it('should check if the input value is numerical (string representation of a number)', () => {
    const result = isNumeric("42");
    expect(result).to.equal(true);
  });

  it('should check if the input value is not numerical (string)', () => {
    const result = isNumeric("Hello");
    expect(result).to.equal(false);
  });

  it('should check if the input value is not numerical (NaN)', () => {
    const result = isNumeric(NaN);
    expect(result).to.equal(false);
  });

  it('should check if the input value is not numerical (null)', () => {
    const result = isNumeric(null);
    expect(result).to.equal(false);
  });
});
