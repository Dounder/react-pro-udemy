import { useReducer } from 'react'

interface CounterState {
	counter: number
	previous: number
	changes: number
}

const INTIIAL_STATE: CounterState = {
	counter: 0,
	previous: 0,
	changes: 0,
}

type CounterAction = { type: 'increaseBy'; payload: { value: number } } | { type: 'reset' }

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
	switch (action.type) {
		case 'reset':
			return { ...INTIIAL_STATE }
		case 'increaseBy':
			return {
				...state,
				counter: state.counter + action.payload.value,
				previous: state.counter,
				changes: state.changes + 1,
			}

		default:
			return state
	}
}

export const CounterReducerComponent = () => {
	const [counterState, dispatch] = useReducer(counterReducer, INTIIAL_STATE)

	const handleClick = (value = 1) => dispatch({ type: 'increaseBy', payload: { value } })

	const handleReset = () => dispatch({ type: 'reset' })

	return (
		<>
			<h1>Counter Reducer</h1>
			<pre>{JSON.stringify(counterState)}</pre>

			<button onClick={() => handleClick(1)}> +1 </button>
			<button onClick={() => handleClick(5)}> +5 </button>
			<button onClick={() => handleClick(10)}> +10 </button>
			<button onClick={handleReset}> Reset </button>
		</>
	)
}
