import { CLEAR_CART, GET_ACCESSORIES_PRODUCT, GET_CART_PRODUCT, GET_CLOTHING_PRODUCT, GET_PRODUCTS, REMOVE_PRODUCT } from "../action-types";

export const getProducts = (payload) => ({
    type: GET_PRODUCTS,
    payload
})

export const getClothingProduct = (payload) => ({
    type: GET_CLOTHING_PRODUCT,
    payload
})

export const getAccessoryProduct = (payload) => ({
    type: GET_ACCESSORIES_PRODUCT,
    payload
})

export const getCartProduct = (payload) => ({
    type: GET_CART_PRODUCT,
    payload
})

export const clearCart = (payload) => ({
    type: CLEAR_CART,
    payload
})

export const removeProduct = (payload) => ({
    type: REMOVE_PRODUCT,
    payload
})