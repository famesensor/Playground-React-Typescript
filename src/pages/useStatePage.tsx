import React, { useState } from 'react'

type Props = { initialCount: number }

const UseStatePage: React.FC<Props> = ({ initialCount }: Props) => {
    const [count, setCount] = useState(initialCount)

    return (
        <div>
            <h2>UseState</h2>
            <h4>Count: {count}</h4>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(initialCount)}>Reset</button>
        </div>
    )
}

export default UseStatePage
