import { View, Text } from 'react-native';
import tw from 'twrnc';

export const App = ()=> {
  return (
    <View style={tw`p-4 android:pt-2 bg-white dark:bg-black`}>
      <Text style={tw`text-2xl text-black dark:text-white`}>Open up packages/ui/index.tsx to start working on your app!</Text>
    </View>
  )
}
export default App