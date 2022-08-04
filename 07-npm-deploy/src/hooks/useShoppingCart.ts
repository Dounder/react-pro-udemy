import { Product, ProductInCart } from '../interfaces/product.interfaces'
import { useState } from 'react'

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldState) => {
			const productInCart: ProductInCart = oldState[product.id] || { ...product, count: 0 }

			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count
				return { ...oldState, [product.id]: productInCart }
			}

			const { [product.id]: toDelete, ...rest } = oldState
			return { ...rest }

			// if (count === 0) {
			// }

			// return { ...oldState, [product.id]: { ...product, count } }
		})
	}

	return {
		//? Props
		shoppingCart,

		//? Methods
		onProductCountChange,
	}
}
