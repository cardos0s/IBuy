import { Image, Text, View } from 'react-native';
import { styles } from './_styles';

export default function Home() { // segunda aba, chamada “Loja”,  módulo isolado
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vinda ao IBuy 🛍️</Text>
      <Text style={styles.title}>esse é a pagina de index</Text>
      <Image source={require("../../src/assets/logo.png")} />
    </View>
  );
}