import axios from 'axios';
import { Alert, HStack, Text, VStack } from 'native-base';
import React from 'react';
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native';
import ProductListItem from '../components/ProductListItem';

const styles = StyleSheet.create({
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
    static props: { route: any; };

    


    constructor(props: any) {
        super(props);
        this.state = {
            products: [

            ]
        };
    }

    async componentDidMount(): Promise<void> {
        const { route } = this.props;
        
        const { categoryID } = route.params;

        console.log(categoryID);
        try {
            const { data: products } = await axios.get(`/products?category=${categoryID}`);
            this.setState({ products });
        } catch (error) {
            console.log(error);
        }
    }

    addToCart = () => {
            
        this.setState({ isItemAddedToCart: true });
        setTimeout(() => {
            this.setState({ isItemAddedToCart: false });
          }, 3000);
    }

    render() {



        const { isItemAddedToCart } = this.state;
        return (
            <View>
                <FlatList data={this.state.products}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <View style={styles.wrapper}>
                            <ProductListItem product={item} onAddToCartClick={this.addToCart} />
                        </View>
                    }
                    keyExtractor={(item) => `${item.id}`}
                />
                {isItemAddedToCart && ( <Alert w="100%" variant={"subtle"} colorScheme="success" status="success">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text color={"coolGray.800"}>
                    Sản phẩm đã được chuyển đến giỏ hàng!
                  </Text>
                </HStack>
                
              </HStack>
            </VStack>
          </Alert>)}
            </View>

        )
    }

}
