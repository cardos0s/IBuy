import { StyleSheet } from 'react-native';
//Aqui você separa a lógica visual da lógica da tela.
//“Ei, isso não é uma rota, é só um arquivo de suporte.” 
export const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d0d2d8',
    paddingTop: 62,
   
  },
  logo: {
        height: 100, 
        width: 134,
    },

  form: {
    width: '100%',
    paddingHorizontal: 10,
    gap: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  content: {
   flex: 1,
   backgroundColor: '#FFF',
   borderTopLeftRadius: 25,
   borderTopRightRadius: 25,
   width: '100%',
   padding:24,
    marginTop: 24,
  },
});