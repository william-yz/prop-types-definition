const assert = require('assert');
const checkPropTypes = require('prop-types/checkPropTypes');
const PropTypes = require('prop-types/factoryWithThrowingShims')();

describe('production: checkPropTypes()', () => {
  it('PropTypes.string pass', () => {
    const propTypes = {
      string: PropTypes.string,
    }
    assert.doesNotThrow(() => {
      checkPropTypes(
        propTypes, 
        {
          string: 'string'
        },
        'props',
        null,
        () => {throw new Error()}
      )
    });
  });
  it('PropTypes.string throws', () => {
    const propTypes = {
      string: PropTypes.string,
    }
    
    assert.doesNotThrow(() => {
      checkPropTypes(
        propTypes, 
        {
          string: 1
        },
        'props',
        null,
        () => {throw new Error()}
      );
    });
  });
  it('PropTypes.string.isRequired throws', () => {
    const propTypes = {
      string: PropTypes.string.isRequired,
    }
    
    assert.doesNotThrow(() => {
      checkPropTypes(
        propTypes, 
        {
        },
        'props',
        null,
        () => {throw new Error()}
      );
    });
  });
})
