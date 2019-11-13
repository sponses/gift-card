import Taro, { useEffect } from '@tarojs/taro'
import { useSelector, useDispatch } from '@tarojs/redux'
import { View, Image, Text } from '@tarojs/components'

import { AtIcon } from 'taro-ui'
import fatchIndexData from '../../actions/fetchIndexData'

import './index.scss'

function Index() {
  const indexData = useSelector(state => state.indexData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fatchIndexData.fetchIndex())
  }, [dispatch])

  const goTo = id => () => {
    Taro.navigateTo({
      url: `../card_side/index?id=${id}`
    })
  }

  return (
    <View className='index'>
      <View>
        {indexData.data.banner ? (
          <Image className='banner' src={indexData.data.banner}></Image>
        ) : (
          <Image
            className='banner'
            src='data:image/jpeg;base64,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'
          ></Image>
        )}
      </View>
      <View className='at-row at-row__justify--between at-row--wrap index-card-wrap'>
        <View className='at-col at-col-12 card-wrap-title'>
          <Text>{indexData.data.title ? indexData.data.title : ''}</Text>
        </View>
        {indexData.data.list
          ? indexData.data.list.map(item => (
              <View
                className='at-col at-col-6'
                key={item.id.toString()}
                onClick={goTo(item.id)}
              >
                <View className='card'>
                  <Image className='index-card-image' src={item.img}></Image>
                  <Text className='index-card-title'>{item.name}</Text>
                </View>
              </View>
            ))
          : ''}
      </View>
      <View className='buy-history'>
        <AtIcon value='clock' size='20' color='blue'></AtIcon>
        <Text>购买历史</Text>
      </View>
    </View>
  )
}

export default Index
