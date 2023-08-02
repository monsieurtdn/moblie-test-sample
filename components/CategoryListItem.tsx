import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View, TouchableOpacity, GestureResponderEvent
} from 'react-native';


const styles = StyleSheet.create({
    categoryIcon: {
        fontSize: 72,
        marginTop: '5px',
        alignSelf: 'center'
    },
    container: {

        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginBottom: 16,
        minHeight: 150,
    },
    img: {
        height: 100,
        width: 100,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }

});
function CategoryListItem(props: { category: any; onPress: (event: GestureResponderEvent) => void }): ReturnType<React.FC> {
    const { category, onPress } = props;
    const imagePath = '../assets/Icon1.png';
    return (
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}>

            <View style={styles.container}>
                <Image source={require('../assets/Icon1.png')} style={styles.img} />
                <View>
                <Text style={styles.title}>{category.name}</Text>
                </View>
            </View>
                

        </TouchableOpacity>
    )
}
export default CategoryListItem;