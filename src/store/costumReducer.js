const defaultState = {
    customers: []
}

const ADD_CUSTOM = 'ADD_CUSTOM'
const REMOVE_CUSTOM = 'REMOVE_CUSTOM'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_MANY_CUSTOMERS: 
        return {...state, customers: [...state.customers, ...action.payload]}
      case ADD_CUSTOM:
        return {...state, customers: [...state.customers, action.payload]}
      case REMOVE_CUSTOM:
        return {...state, customers: state.customers.filter(item => item.id !== action.payload)}
      default: 
        return state
    }
  }

export const addCustomerAction = (payload) => ({type: ADD_CUSTOM, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOM, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})