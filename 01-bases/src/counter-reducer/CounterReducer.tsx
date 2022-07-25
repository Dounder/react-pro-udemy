import { useReducer } from 'react'

import * as actions from './actions/actions'
import { CounterState } from './interfaces/interfaces'
import { counterReducer } from './state/counterReducer'

const INTIIAL_STATE: CounterState = { counter: 0, previous: 0, changes: 0 }

export const CounterReducerComponent = () => {
	const [counterState, dispatch] = useReducer(counterReducer, INTIIAL_STATE)

	const handleClick = (value = 1) => dispatch(actions.doIncreaseBy(value))

	const handleReset = () => dispatch(actions.doReset())

	return (
		<>
			<h1>Counter Reducer Segmentado</h1>
			<pre>{JSON.stringify(counterState, null, 2)}</pre>

			<button onClick={() => handleClick(1)}> +1 </button>
			<button onClick={() => handleClick(5)}> +5 </button>
			<button onClick={() => handleClick(10)}> +10 </button>
			<button onClick={handleReset}> Reset </button>
		</>
	)
}
