import { createContext, ReactElement } from 'react'

import { useProduct } from '../hooks/useProduct'
import { OnChangeArgs, Product, ProductContextProps } from '../interfaces/product.interfaces'
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface Props {
	product: Product
	children?: ReactElement | ReactElement[]
	className?: string
	style?: React.CSSProperties
	onChange?: (args: OnChangeArgs) => void
	value?: number
}

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
	const { counter, increaseBy } = useProduct({ onChange, product, value })

	return (
		<Provider value={{ counter, increaseBy, product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	)
}
