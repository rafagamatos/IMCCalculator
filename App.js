import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Formulario from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
       <Title/>    
        <Formulario/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
   paddingTop: 80,
  },
});
