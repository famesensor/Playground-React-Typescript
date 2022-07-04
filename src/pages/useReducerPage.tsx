import React from 'react'

interface State {
    count: number
}

type Action =
    | { type: 'reset'; payload: number }
    | { type: 'increment'; payload: number }
    | { type: 'decrement'; payload: number }

const countReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        case 'reset':
            return { ...state, count: action.payload }
        default:
            throw new Error()
    }
}

const UesReducerPage: React.FC<State> = ({ count }: State) => {
    const [state, dispatch] = React.useReducer(countReducer, { count: count })

    return (
        <div>
            <h2>UseReducer</h2>
            <h4>Count: {state.count}</h4>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'reset', payload: count })}>
                Reset
            </button>
        </div>
    )
}

export default UesReducerPage
