import { useEffect, useRef, useState } from 'react'

import { OnChangeArgs, Product } from '../interfaces/product.interfaces'

interface Args {
	product: Product
	onChange?: (args: OnChangeArgs) => void
	value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: Args) => {
	const [counter, setCounter] = useState(value)

	const isControlled = useRef(!!onChange)

	const increaseBy = (value: number) => {
		if (isControlled.current) return onChange!({ count: value, product })

		const newValue = Math.max(counter + value, 0)
		setCounter(newValue)

		onChange && onChange({ count: newValue, product })
	}

	useEffect(() => {
		setCounter(value)
	}, [value])

	return {
		//? props
		counter,

		//*    methods
		increaseBy,
	}
}
