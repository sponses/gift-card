import { axios } from 'taro-axios'
import {
  FETCHINDEXSTART,
  FETCHINDEXSUCCESS,
  FETCHINDEXFAILED
} from '../constants/fetchIndexData'
import { baseUrl } from '../utils/index'

class FetchIndex {
  fetchIndex = () => {
    return async dispatch => {
      dispatch(this.fetchIndexStart())
      try {
        let result = await axios.get(`${baseUrl}indexData`)
        dispatch(this.fetchIndexSuccess(result.data))
      } catch (err) {
        dispatch(this.fetchIndexFailed(err))
      }
    }
  }

  fetchIndexStart = () => {
    return {
      type: FETCHINDEXSTART
    }
  }

  fetchIndexSuccess = data => {
    return {
      type: FETCHINDEXSUCCESS,
      data
    }
  }

  fetchIndexFailed = err => {
    return {
      type: FETCHINDEXFAILED,
      err
    }
  }
}

const fatchIndexData = new FetchIndex()

export default fatchIndexData
