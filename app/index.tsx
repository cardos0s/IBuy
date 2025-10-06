import { Image, View } from 'react-native';
import { styles } from './_style';

export default function Index() { //pag inicial 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      
    </View>
  );
}