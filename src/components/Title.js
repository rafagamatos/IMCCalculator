import { StyleSheet, View , Text} from 'react-native';
export default function Title(){
   return(
    <View style={styles.boxTitle}>
           <Text style={styles.textTitle}> ONEBITHEALTH</Text>
    </View>
   )
}

const styles = StyleSheet.create({
    boxTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,  
    },
    textTitle: {
      color: '#ff0043',
      fontSize: 24,
      fontWeight: 'bold',
    }
  });