'use client'

import { useEffect, useState } from 'react'



const About = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("count changed:", count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default About
