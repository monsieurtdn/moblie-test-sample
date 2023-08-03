import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View, TouchableOpacity, GestureResponderEvent
} from 'react-native';
import { AntOutline } from 'antd-mobile-icons';

const styles = StyleSheet.create({
    categoryIcon: {
        fontSize: 72,
        marginTop: '5px',
        alignSelf: 'center'
    },
    container: {
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16

    },

    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }

});
function OrderListItem(props: { order: any; onPress: (event: GestureResponderEvent) => void }): ReturnType<React.FC> {
    const { order, onPress } = props;
    const imagePath = '../assets/Icon1.png';

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={onPress}>
            <View style={styles.container}>
                <View style={{marginBottom: 10}}>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Mã đơn hàng:{order.name}</Text>
                    <Text style={{ fontSize: 10 }}>Địa chỉ: {order.addressesHome} - Dự kiến giao: {order.receiveDate}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', minWidth: '100%'}}>
                    <Text style = {{color: 'green', minWidth: '55%'}}>Tình trạng: {order.status}</Text>
                    <Text style= {{fontWeight: 'bold', fontSize: 20}}>{order.products.reduce((total: number, product: { price: number; quantities: number; }) => {
                        return total + product.price * product.quantities;
                    }, 0)} VND</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}
export default OrderListItem;