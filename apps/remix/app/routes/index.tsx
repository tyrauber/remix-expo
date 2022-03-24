import { View } from 'react-native-web'
import DefaultText from '~components/index'

export const Page = ()=> {
  return (
    <View style={{
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <DefaultText/>
    </View>
  );
}

export default Page
