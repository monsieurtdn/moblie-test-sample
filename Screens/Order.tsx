import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';
import { FlatList } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: 'white',

    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    },
    text: {
        paddingTop: 10
    },
    img: {
        width: 30,
        height: 30,

    }

});

export default class Order extends React.Component<any, any>  {
    static props: { route: any; };



    constructor(props: any) {
        super(props);
        this.state = {
            products: [

            ]
        };
    }

    // async componentDidMount(): Promise<void> {
    //     const { route } = this.props;

    //     const { orderID } = route.params;

    //     try {
    //         const { data: products } = await axios.get(`/orders/${orderID}/products`);
    //         this.setState({ products });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    render() {



        let payment = 0;



        const { route } = this.props;

        const { orderName, orderAddressHome, orderAddressShop, orderShopDate, orderReceiveDate, orderStatus } = route.params;

        const { orderProducts } = route.params || [];

        orderProducts.forEach((item: { price: number; quantities: number; }) => {
            payment += item.price * item.quantities;
        });
        return (
            <View style={{minHeight: '100%'}}>
                <View style={styles.container}>
                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 25, paddingLeft: 10 }}>Mã đơn hàng: {orderName}</Text>
                    </View>
                    <View style={{ marginVertical: 5, borderBottomWidth: 0.5, borderTopWidth: 0.5, borderColor: 'black', paddingVertical: 20 }}>
                        <Text style={{ fontSize: 16, paddingLeft: 10, paddingBottom: 10 }}>Số lượng sản phẩm: </Text>
                        <FlatList
                            data={orderProducts}
                            renderItem={({ item }) => (
                                <View style={{ flexDirection: 'row', marginVertical: 5, paddingLeft: 10, paddingBottom: 10 }}>
                                    <Image source={require('../assets/Icon1.png')} style={styles.img} />
                                    <Text style={{ paddingLeft: 20, fontSize: 16 }}>{item.name}: {item.price}vnd x {item.quantities}</Text>
                                </View>
                            )}
                            keyExtractor={(item) => `${item.id}`}
                        />
                    </View>
                    <View style={{ paddingLeft: 10 }}>
                        <Text  style={styles.text}>Đặt ngày: {orderShopDate}</Text>
                        <Text  style={styles.text}>Dự kiến nhận vào ngày: {orderReceiveDate}</Text>
                    </View>

                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.text}>Địa chỉ cửa hàng: {orderAddressShop}</Text>
                        <Text style={styles.text}>Địa chỉ nơi nhận: {orderAddressHome}</Text>
                    </View>

                </View>
                <View style={{ paddingVertical: 10,flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignContent: 'center', borderTopColor: 'black', borderTopWidth: 0.5}}>
                    <Text style = {{color: 'green', paddingTop: 10}}>Trạng thái: {orderStatus}</Text>
                    <Text style={{ marginLeft: 95, fontWeight:'bold', paddingTop: 10}}>Thành tiền: {payment + 0.1 * payment}đ</Text>
                </View>

            </View>

        )
    }

}
