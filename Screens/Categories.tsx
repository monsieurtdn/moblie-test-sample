import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import {
    StyleSheet,
    View,
} from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import axios from 'axios';

const styles = StyleSheet.create({
    categoryIcon: {
        fontSize: 72,
        marginTop: '5px',
        alignSelf: 'center'
    },
    container: {


            flex: 1,
            alignItems: 'stretch',
            backgroundColor: '#fff',
            padding: 16,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 10,
            shadowOffset: { width:0, height: 0},
            justifyContent: 'center'
        
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }

});



export default class Categories extends React.Component<any, any> {



    static navigationOptions = {
        title: 'Header',
    }
    constructor(props: any) {
        super(props);
        this.state = {
            categories: [

            ]
        };
    }
    
    componentDidMount(): void {
      axios.get('/categories')
        .then(res => {
            this.setState({
                categories: res.data
            })
        })
        .catch(error => {
            console.log(error)
        }
        )
    }

    render() {
        const { navigation } = this.props;
        const { categories } = this.state;

        return (
            <View style={styles.container}>

                    
                    <FlatList
                        data={categories}
                        renderItem={({ item }) => (
                            <CategoryListItem
                                category={item}
                                onPress={() => {
                                    navigation.navigate('Category',{
                                        categoryName: item.name,
                                        categoryID: item.id
                                    });
                                }}
                            />
                        )}
                        keyExtractor={(item) => `${item.id}`}
                        contentContainerStyle={styles.container}
                    />

            </View>
        );
    }
}
