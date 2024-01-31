import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({
    cart: []
});

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialCart);
    
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart (prev => [...prev, {...item, quantity}])
        } else {
            setCart(prev =>
                prev.map(prod =>
                    prod.id === item.id ? {...prod, quantity: quantity} : prod
                )
            );
        }
    }

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    }

    const totalQuantity = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);
    }

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cart.map(prod => 
            prod.id === itemId ? {...prod, quantity: newQuantity} : prod
        );
        setCart(updatedCart);
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart]);

    const formatMoney = (conversion) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(conversion);
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total, updateQuantity, formatMoney }}>
            { children }
        </CartContext.Provider>
    )
}



/* Esto es lo que estaba antes-------------------------------------------------------------------------------------------------------------------------------------------- 

import {createContext , useState} from 'react'

export const CartContext = createContext ({
    cart : []
})

export const CartProvider = ({children}) => {
    const [ cart,setCart] = useState ([])

    console.log (cart)

    const addItem = (item,quantity) => {
        if (!isInCart(item.id)) {
            setCart (prev => [...prev,{...item,quantity}])
        } else {
            console.error ('El producto ya fue entregado')
        }
    }
    const removeItem = (itemId) => {
        const cartUpdated = cart.filtered (prod => prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart =() => {
        setCart ([])
    }

    const isInCart = (itemId) => {
        return cart.some (prod=> prod.id === itemId) 
    }

    return (
        <CartContext.Provider value = {{cart,addItem , removeItem , clearCart}}>
            {children}
        </CartContext.Provider>
    )
} */ 