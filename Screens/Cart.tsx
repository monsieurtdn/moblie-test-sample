import axios from 'axios';
import { Alert, Button, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CartListItem from '../components/CartListItem';
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
    handleOrder = () => {

        this.setState({ isOrdered: true });
        setTimeout(() => {
            this.setState({ isOrdered: false });
          }, 3000);
    }

    render(): React.ReactNode {
        const { navigation } = this.props;
        const { products, isOrdered } = this.state;
        let totalPrice = 0;
        products.forEach((item: { price: number; quantities: number; }) => {
            totalPrice += item.price * item.quantities;
        });
        return (
            <View style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={({ item }) => (
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

                <View style={{ flexDirection: 'row', backgroundColor: 'white',  alignContent: 'center' }}>
                    <View style={styles.price}>
                        <Text style={{ fontSize: 10, paddingTop: 10 }}>Thành tiền: </Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', paddingTop: 15  }}>{totalPrice}đ</Text>
                    </View>
                    <Button colorScheme='primary' onPress={this.handleOrder} style={{ marginLeft: 100, marginRight: 5 }}>Đặt hàng</Button>
                </View>
                {isOrdered && (<Alert w="100%" variant={"subtle"} colorScheme="success" status="success">
                    <VStack space={2} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                            <HStack space={2} flexShrink={1} alignItems="center">
                                <Alert.Icon />
                                <Text color={"coolGray.800"}>
                                    Đơn hàng đã được tiếp nhận !
                                </Text>
                            </HStack>

                        </HStack>
                    </VStack>
                </Alert>)}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flex: 1
    },
    price: {
        maxWidth: 275,
        paddingLeft: 25,
        flexDirection: 'row'
    }
})