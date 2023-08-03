import React, {useState} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View, TouchableOpacity, GestureResponderEvent
} from 'react-native';
import { Button } from 'native-base';


function CartListItem(props: { product: any; categoryPrice: number }): ReturnType<React.FC> {
    const { product } = props;
    const imagePath = product.image[0].url;
    const [number, setNumber] = useState(product.quantities);

    const handleNumberIncrease = () =>{setNumber(number + 1 )}
    const handleNumberDecrease = () =>{if(number > 0)setNumber(number - 1 )}
    return (
        <View>
            <View style = {styles.container}>
                <Image source={require('../assets/Icon1.png')} style={styles.img} />
                <View style ={{marginRight: 175, marginLeft: 10, minWidth: 75}}>
                    <Text style = {{textTransform: 'uppercase'}}>{product.name}</Text>
                    <Text style = {{color: 'grey'}}>{product.price}</Text>
                </View>
                <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                    <Button size='5' style = {styles.button} onPress={handleNumberDecrease}>-</Button>
                    <Text style = {{fontWeight: 'bold'}}>{number}</Text>
                    <Button size='5' style = {styles.button} onPress={handleNumberIncrease}>+</Button>
                </View>
            </View>
        </View>
    )
}
export default CartListItem;
const styles = StyleSheet.create({
    img: {
        height: 50,
        width: 50,
        padding: 16
    },
    button: {
        backgroundColor: 'grey',
        color: 'white',
        justifyContent: 'center'
    },
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 16,
        shadowRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {width:0, height: 0},
        marginBottom: 16
    },

})