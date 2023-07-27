import { GestureResponderEvent, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { formatPrice } from "../Utils/Number";
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },
    container: {
        marginBottom: 20,
        borderRadius: 4,
        backgroundColor: '#fff',
        overflow: 'hidden'
    },
    info: {
        padding: 8
    },
    img: {
        height: 150,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1,
    }
})




function ProductListItem(props: { product: any; onAddToCartClick?: (event: GestureResponderEvent) => void }): ReturnType<React.FC> {
    const { product, onAddToCartClick } = props;
    const imagePath = product.image[0].url

    return (
        <GestureHandlerRootView>
            <View style={styles.shadow}>
                <View style={styles.container}>
                    <Image source={imagePath} style={styles.img} />

                    <View style={styles.info}>
                        <Text style={styles.name}>{product.name}</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>{product.price}</Text>
                            <TouchableOpacity onPress={onAddToCartClick}>
                                <Text style={styles.cartText}> MUA + </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </GestureHandlerRootView>
    )
}
export default ProductListItem;