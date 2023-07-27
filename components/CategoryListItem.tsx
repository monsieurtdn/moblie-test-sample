import React, { ReactEventHandler } from 'react';
import {
    StyleSheet,
    Alert,
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
        flex: 1,
        alignItems: 'center',
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
function CategoryListItem(props: { category: any; onPress: (event: GestureResponderEvent) => void }): ReturnType<React.FC> {
    const { category, onPress } = props;
    return (
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <AntOutline style={styles.categoryIcon} />
            </View>
        </TouchableOpacity>
    )
}
export default CategoryListItem;