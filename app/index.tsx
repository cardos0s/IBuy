// Importa a função StyleSheet da biblioteca React Native.
// Ela é usada para criar um objeto de estilos otimizado e validado,
// parecido com o uso de CSS, mas dentro do ambiente mobile.
import { Image, View } from 'react-native';
import { styles } from './_style';




// Cria e exporta o objeto "styles" contendo todas as regras de estilo desta tela.
// O StyleSheet ajuda o React Native a validar as propriedades e otimizar a renderização.
// Esse objeto será importado e aplicado nos componentes do arquivo "index.tsx" da mesma pasta.
export default function Index() { //pag inicial 
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      
    </View>
  );
}