import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './card.scss'

function Card({ img, name, prize, count, add, minus }) {
  return (
    <View className={count ? 'side-card side_active' : 'side-card'}>
      <View>
        <Image className='card-image' src={img}></Image>
        <View className='intro'>
          <Text className='name'>{name}</Text>
          <Text>{prize}</Text>
        </View>
      </View>
      {count ? (
        <View className='options options2'>
          <Text className='minus' onClick={minus}>
            -
          </Text>
          <Text className='add' onClick={add}>
            +
          </Text>
        </View>
      ) : (
        <View className='options'>
          <Text onClick={add}>+</Text>
        </View>
      )}
      {count ? <View className='count'>{count}</View> : null}
    </View>
  )
}

export default Card
