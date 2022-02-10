import React, { memo } from 'react';
import PropTypes from 'prop-types';

UseContent.propTypes = {
    onIncrease: PropTypes.func
};

function UseContent({ onIncrease }) {
    // console.log('re-render')

    return (
        <div>
            <h1>useCallback</h1>
            <button onClick={onIncrease}>+</button>
        </div>
    );
}

export default memo(UseContent);