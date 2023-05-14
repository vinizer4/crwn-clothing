import { createContext, useState } from "react";


const addcartItem = (cartItems, productToAdd) => {
	
	const existingCardItem = cartItems.find((cartItem) =>
		                                        cartItem.id
		                                        === productToAdd.id)
	
	if ( existingCardItem ) {
		return cartItems.map((cartItem) =>
				     cartItem.id
				     === productToAdd.id ? {
					     ...cartItem,
					     quantity: cartItem.quantity + 1
				     } : cartItem)
	}
	
	return [
		...cartItems,
		{
			...productToAdd,
			quantity: 1
		}
	]
}

export const CartContext = createContext(
	{
		isCartOpen   : false,
		setIsCartOpen: () => {},
		cartItems    : [],
		addItemtoCart: () => {}
	}
)

export const CartProvider = ({ children }) => {
	const [ isCartOpen, setIsCartOpen ] = useState(false)
	const [ cartItems, setCartItems ] = useState([])
	
	const addItemToCart = (productToAdd) => {
		setCartItems(addcartItem(cartItems, productToAdd))
	}
	
	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		cartItems
	}
	
	return <CartContext.Provider
		value={ value }>{ children }</CartContext.Provider>
}


