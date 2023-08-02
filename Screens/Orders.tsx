import axios from 'axios';
import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, GestureResponderEvent } from 'react-native';
import OrderListItem from '../components/OrderListItem'
export default class Orders extends React.Component<any, any> {


    constructor(props: any) {
        super(props);
        this.state = {
            orders: [

            ]
        };
    }


    componentDidMount(): void {
        axios.get('/orders')
            .then(res => {
                this.setState({
                    orders: res.data
                })
            })
            .catch(error => {
                console.log(error)
            }
            )
    }
    
    render(): React.ReactNode {
        const { navigation } = this.props;
        const { orders } = this.state;
        
        
        return (
            <View style={styles.container}>
                <FlatList
                    data={orders}
                    renderItem={({ item }) => (
                        <OrderListItem order={item}
                            onPress={() => {
                                navigation.navigate('Order', {
                                    orderID: item.id,
                                    orderName: item.name,
                                    orderProducts: item.products,
                                    orderAddressHome: item.addressesHome,
                                    orderAddressShop: item.addressesShop,
                                    orderShopDate: item.shopDate,
                                    orderReceiveDate: item.receiveDate,
                                    orderStatus: item.status
                                });
                                console.log(item.products)
                            }} />
                    )
                    }
                    keyExtractor={(item) => `${item.id}`}
                    contentContainerStyle={styles.container}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    categoryIcon: {
        fontSize: 72,
        marginTop: '5px',
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'stretch',

        paddingLeft: 16,
        paddingRight: 16,
        


    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }

});