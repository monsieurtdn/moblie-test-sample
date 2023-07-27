import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import axios from 'axios';

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
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
        paddingTop: 8
    }

});

export default class Category extends React.Component<any, any>  {
    static navigationOptions = ({ navigation }: { navigation: any }) => {
        

        return {
            title: navigation.getParam('categoryName'),
 
            
        }
    }
    constructor(props: any) {
        super(props);
        this.state = {
            products: [
                
            ]
        };
    }

    async componentDidMount(): Promise<void> {
        const { navigation } = this.props;
        const id  = navigation.getParam('categoryID');
        
        console.log(id);
        try {
            const {data: products} = await axios.get(`/products?category=${id}`);
            this.setState({products});
        } catch (error) {
            console.log(error);
        }
      }

    render() {
        return (
            <View>
            <FlatList data={this.state.products}
                numColumns={2}
                renderItem={({ item }) =>
                    <View style={styles.wrapper}>
                        <ProductListItem product={item} />
                    </View>
                }
                keyExtractor={(item) => `${item.id}`}
            />
    </View>

        )
    }

}
