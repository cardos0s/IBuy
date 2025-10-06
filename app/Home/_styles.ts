import { StyleSheet } from 'react-native';
//Aqui você separa a lógica visual da lógica da tela.
//“Ei, isso não é uma rota, é só um arquivo de suporte.” 
export const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});