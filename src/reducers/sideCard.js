import {
  FETCHPRODUCTSSTART,
  FETCHPRODUCTSSUCCESS,
  FETCHPRODUCTFAILED,
  ADDCOUNT,
  MINUSCOUNT,
  FETCHDETAILSTART,
  FETCHDETAILFAILED,
  FETCHDETAILSUCCESS
} from '../constants/sideCard'

export default (state = { loading: false, data: {}, id: '' }, action) => {
  switch (action.type) {
    case FETCHPRODUCTSSTART:
      return {
        ...state,
        loading: true
      }
    case FETCHPRODUCTSSUCCESS:
      return {
        ...state,
        id: action.id,
        data: action.data,
        loading: false
      }
    case FETCHPRODUCTFAILED:
      return {
        ...state,
        id: action.id,
        err: action.err,
        loading: false
      }
    case ADDCOUNT:
      return {
        ...state,
        data: {
          ...state.data,
          list: state.data.list.map(item => {
            if (item.id === action.productId) {
              item.count++
            }
            return item
          })
        }
      }
    case MINUSCOUNT:
      return {
        ...state,
        data: {
          ...state.data,
          list: state.data.list.map(item => {
            if (item.id === action.productId) {
              item.count--
            }
            return item
          })
        }
      }
    case FETCHDETAILSTART:
      return {
        ...state,
        loading: true
      }
    case FETCHDETAILSUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.data
      }
    case FETCHDETAILFAILED:
      return {
        ...state,
        loading: false,
        detail: action.err
      }
    default:
      return state
  }
}
