import { GET_CLOTHING_PRODUCT, GET_ACCESSORIES_PRODUCT, GET_PRODUCTS, GET_CART_PRODUCT, CLEAR_CART, REMOVE_PRODUCT } from "../action-types";
const initialState = {
    product: [],
    clothingProduct: [],
    accessoriesProduct: [],
    cartProduct: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case GET_PRODUCTS:
        return { ...state, product: payload }

    case GET_CLOTHING_PRODUCT:
        return { ...state, clothingProduct: payload }

    case GET_ACCESSORIES_PRODUCT:
        return { ...state, accessoriesProduct: payload }
    
    case GET_CART_PRODUCT:
        {
            const productIndex = state.cartProduct.findIndex((item) => item.id === payload.id);
            if(productIndex < 0){
                payload.quantity = 1;
                return {...state, cartProduct: [...state.cartProduct,payload]}
            }
            else{
                state.cartProduct[productIndex].quantity += 1;
                return {...state} 
            }
        }

    case CLEAR_CART:
    return { ...state, cartProduct: [] }

    case REMOVE_PRODUCT:
        {
            const newProduct = state.cartProduct.filter((item) => item.id !== payload)
            return {...state, cartProduct: newProduct}
        }

    default:
        return state
    }
}
