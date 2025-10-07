import { Image, View, } from 'react-native';
import { styles } from './_styles';

import { Filter } from '@/assets/components/Filter';
import { Input } from '@/assets/components/Input';
import { FilterStatus } from '@/assets/types/FilterStatus';
import { Button } from "../../src/assets/components/Button";



export default function Home() { // segunda aba, chamada “Loja”,  módulo isolado
  return (
    <View style={styles.container}>
  
 
      <Image source={require("../../src/assets/logo.png")} />

      <View style={styles.form}>
        <Input placeholder="O que você deseja comprar?"/>
        <Button title="Adicionar"/>
      </View>

      <View style={styles.content}>

      <View style={styles.content}>
          <Filter status={FilterStatus.DONE} isActive/>
          <Filter status={FilterStatus.PENDING} isActive={false}/>

      </View>


      </View>
    </View>

    

  );
}