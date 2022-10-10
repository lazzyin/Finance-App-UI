import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header  from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
  id: 1,
  label: 'SportsBet',
  value: 3000,
  date: '17/09/2022',
  type:0
},
  {
  id: 2,
  label: 'Betano',
  value: 2080,
  date: '15/09/2022',
  type:0
},
  {
  id: 3,
  label: 'PIX',
  value: 10,
  date: '12/09/2022',
  type:1
},
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="John Ferreira" />
      
      <Balance saldo={13.5} gastos={-10000} />

      <Actions/>

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList style={styles.list} data={list} keyExtractor={(item) => String(item.id)} showsVerticalScrollIndicator={false} renderItem={({item}) => <Movements data={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight:'bold',
    margin:14,
  },
  list: {
    marginStart: 14,
    marginEnd:14,
  }
});