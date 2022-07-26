import { createContext } from 'react'

import { useProduct } from '../hooks/useProduct'
import { ProductCardProps, ProductContextProps } from '../interfaces/product.interfaces'

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children }: ProductCardProps) => {
	const { counter, increaseBy } = useProduct()

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={styles.productCard}>
				{children}
				{/* <ProductImage img={product.img} />
				<ProductTitle title={product.title} />
				<ProductButtons counter={counter} increaseBy={increaseBy} /> */}
			</div>
		</Provider>
	)
}
