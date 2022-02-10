import React, {useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';


// luu gia tri bat ky qua 1 tham chieu ben ngoai component
Count.propTypes = {
    
};

function Count(props) {
    const [count, setCount] = useState(60)

    // const ref = useRef(99)
    // ref = {current: 99}

    // gan lai dung let
    const timerId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        // console.log(h1Ref.current)
        const rect = h1Ref.current.getBoundingClientRect()
        // console.log(rect)
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }
    
    // console.log(count, prevCount.current)

    return (
        <div style={{paddingLeft: '20px'}}>
            <h1>useRef</h1>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
}

export default Count;