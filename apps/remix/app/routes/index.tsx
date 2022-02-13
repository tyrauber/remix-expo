import { View, Text, StyleSheet } from 'react-native-web'
import DefaultText from '~components/index'

export const Page = ()=> {
  return (
    <View style={styles.container}>
      <DefaultText/>
    </View>
  );
}

export default Page

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
