
import axios from 'axios';
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, Modal } from "native-base";
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    information: {
        flexDirection: "row",
        padding: 10
    },
    img: {
        width: 100,
        height: 100,
        marginRight: 10
    },
    options: {
        paddingTop: 20
    },
    text: {
        paddingBottom: 5
    }
})




export default class SettingScreen extends React.Component<any, any> {


    constructor(props: any) {
        super(props);
        this.state = {
            modalVisible: false,
            isLoggedIn: false,
        };
    }

    handleSizeClick = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    };



    render(): React.ReactNode {
        const {navigation} = this.props;
        const { modalVisible } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.information}>
                    <Image source={require('../assets/Icon1.png')} style={styles.img} />
                    <View>
                        <Text style={styles.text}>Tên người dùng: "Name"</Text>
                        <Text style={styles.text}>Email: "email@gamil.com"</Text>
                        <Text style={styles.text}>SĐT: "0123456789"</Text>
                        <Text style={styles.text}>Địa chỉ: "144 Xuan Thuy, Cau Giay, Ha Noi"</Text>
                    </View>
                </View>

                <View style={styles.options}>
                    <Button variant="outline" colorScheme='blue' style={{ marginBottom: 10, borderColor: 'blue' }}>Thay đổi thông tin cá nhân</Button>
                    <Button variant="outline" colorScheme='warning' style={{ marginBottom: 10, borderColor: 'orange' }}>Đổi mật khẩu</Button>
                    <Button variant="outline" colorScheme='error' style={{ marginBottom: 10, borderColor: 'red' }} onPress={() => this.handleSizeClick()}>Đăng xuất</Button>
                    
                    <Button variant="outline" colorScheme='success' style={{ marginBottom: 10, borderColor: 'green' }} >Đăng nhập</Button>
                </View>



                <Modal isOpen={modalVisible} onClose={() => this.handleSizeClick()} size="xs">
                    <Modal.Content maxH="212">
                        <Modal.CloseButton />
                        <Modal.Header>Log-out Confirmation</Modal.Header>
                        <Modal.Body>
                            <ScrollView>
                                <Text>
                                    Xác nhận đăng xuất?
                                </Text>
                            </ScrollView>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={
                                    () => this.handleSizeClick()
                                }>
                                    Cancel
                                </Button>
                                <Button onPress={
                                   () => {this.handleSizeClick();
                                    navigation.navigate('Login')
                                }
                                }>
                                    Xác nhận
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
                
            </View>
        )
    }

}