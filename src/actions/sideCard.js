import { axios } from 'taro-axios'
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

import { baseUrl } from '../utils/index'

class FetchProducts {
  fetchProducts = id => {
    return async dispatch => {
      dispatch(this.fetchProductsStart())
      try {
        let result = await axios.get(`${baseUrl}cardSideData?id=${id}`)
        result.data.list.map(item => {
          item.count = 0
        })
        dispatch(this.fetchProductsSuccess(id, result.data))
      } catch (err) {
        dispatch(this.fetchProductsFailed(id, err))
      }
    }
  }

  fetchProductsStart = () => {
    return {
      type: FETCHPRODUCTSSTART
    }
  }

  fetchProductsFailed = (id, err) => {
    return {
      type: FETCHPRODUCTFAILED,
      id,
      err
    }
  }

  fetchProductsSuccess = (id, data) => {
    return {
      type: FETCHPRODUCTSSUCCESS,
      id,
      data
    }
  }
}

class ChangeCount {
  add = productId => {
    return {
      type: ADDCOUNT,
      productId
    }
  }
  minus = productId => {
    return {
      type: MINUSCOUNT,
      productId
    }
  }
}

class FetchDetail {
  fetchEdtail = productId => {
    return async dispatch => {
      dispatch(this.fetchEdtailStart())
      try {
        let result = await axios.get(
          `${baseUrl}productDetail?productId=${productId}`
        )
        dispatch(this.fetchEdtailSuccess(result.data))
      } catch (err) {
        this.fetchEdtailFailed()
      }
    }
  }

  fetchEdtailStart = () => {
    return {
      type: FETCHDETAILSTART
    }
  }

  fetchEdtailFailed = err => {
    return {
      type: FETCHDETAILFAILED,
      err
    }
  }

  fetchEdtailSuccess = data => {
    return {
      type: FETCHDETAILSUCCESS,
      data
    }
  }
}

const fetchProducts = new FetchProducts()
const changeCount = new ChangeCount()
const fetchDetail = new FetchDetail()

export { fetchProducts, changeCount, fetchDetail }
