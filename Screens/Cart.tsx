import React, {useEffect} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import CartListItem from '../components/CartListItem';
import { Button } from 'native-base';
export default class CartScreen extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            products: [

            ]
        };
    }

    async componentDidMount(): Promise<void> {


   
        try {
            const { data: products } = await axios.get(`/cart`);
            this.setState({ products });
        } catch (error) {
            console.log(error);
        }
    }

    render(): React.ReactNode {
        const { navigation } = this.props;
        const { products } = this.state;
        let totalPrice = 0;
        products.forEach((item: { price: number; quantities: number; }) => {
            totalPrice += item.price * item.quantities;
          });
        return(
            <View style = {styles.container}>
                <FlatList
                data={products}
                renderItem={({item}) => (
                    <View>
                    <CartListItem 
                    product={item}
                    categoryPrice={item.price * item.quantities}
                    />
                    </View>
                )
                
            }
                keyExtractor={(item) => `${item.id}`}
                />

                <View style = {{flexDirection: 'row', backgroundColor: 'white',justifyContent: 'center', alignContent: 'center'}}>
                    <View style = {styles.price}>
                    <Text style = {{fontSize: 10, paddingTop:10}}>Thành tiền: </Text>
                    <Text style = {{fontSize: 25, fontWeight: 'bold',}}>{totalPrice}đ</Text>
                    </View>
                    <Button colorScheme='primary' style={{marginLeft:100, marginRight: 5}}>Đặt hàng</Button>
                </View>
            </View> 
        )
    }
}
const styles = StyleSheet.create ({
    container: {
        alignItems: 'stretch',
        flex:1
    },
    price: {
        maxWidth: 275,
        paddingLeft: 25,
        flexDirection: 'row'
    }
})