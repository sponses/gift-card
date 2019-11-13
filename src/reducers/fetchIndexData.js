import {
  FETCHINDEXSTART,
  FETCHINDEXSUCCESS,
  FETCHINDEXFAILED
} from '../constants/fetchIndexData'

export default function counter(state = { data: {}, loading: true }, action) {
  switch (action.type) {
    case FETCHINDEXSTART:
      return {
        ...state,
        loading: true
      }
    case FETCHINDEXSUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case FETCHINDEXFAILED:
      return {
        ...state,
        loading: false,
        err: action.err
      }
    default:
      return state
  }
}
