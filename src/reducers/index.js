import { combineReducers } from 'redux'
import fetchIndexData from './fetchIndexData'
import sideCard from './sideCard'

export default combineReducers({
  indexData: fetchIndexData,
  sideCardData: sideCard
})
