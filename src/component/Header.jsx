import React, { useState } from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function getRandomColor(){
    const COLOR_LIST = ['brown', 'green', 'blue', 'yellow', 'gray']
    const randomIndex = Math.trunc(Math.random() * 5)
    return COLOR_LIST[randomIndex]
}

function Header(props) {
    const [color, setColor] = useState(() => {
        return localStorage.getItem('box-color') || 'red'
    })

    const handleBoxClick = () => {
        const newColor = getRandomColor()
        setColor(newColor)

        localStorage.setItem('box-color', newColor)
    }

    return (
        <div 
            className='color-box'
            style={{backgroundColor: color}}
            onClick={handleBoxClick}
        >
            {color}
        </div>
    );
}

export default Header;