import { useEffect, useRef, useState } from 'react'

import { OnChangeArgs, Product, InitialValues } from '../interfaces/product.interfaces'

interface Args {
	product: Product
	onChange?: (args: OnChangeArgs) => void
	value?: number
	initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: Args) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value)
	const isMounted = useRef(false)

	const isControlled = useRef(!!onChange)

	const increaseBy = (value: number) => {
		if (isControlled.current) return onChange!({ count: value, product })

		let newValue = Math.max(counter + value, 0)

		// initialValues?.maxCount && newValue < initialValues?.maxCount
		// 	? setCounter(newValue)
		// 	: setCounter(initialValues?.maxCount || newValue)
		if (initialValues?.maxCount) newValue = Math.min(newValue, initialValues.maxCount)

		setCounter(newValue)

		onChange && onChange({ count: newValue, product })
	}

	const reset = () => setCounter(initialValues?.count || value)

	useEffect(() => {
		if (!isMounted.current) return
		setCounter(value)
	}, [value])

	useEffect(() => {
		isMounted.current = true
		return () => {
			isMounted.current = false
		}
	}, [])

	return {
		//? props
		counter,
		isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
		maxCount: initialValues?.maxCount,

		//*    methods
		increaseBy,
		reset,
	}
}
