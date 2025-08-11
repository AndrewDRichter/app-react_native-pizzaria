import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn() {

    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function handleLogin() {
        setError('');

        if (email === '' || password === '') {
            setError('Email o contraseña incorrecto(s)')
            return;
        }

        await signIn({ email, password })
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/logo_ok.png')}></Image>

            <View style={styles.loginForm}>
                <TextInput
                    placeholder='E-mail'
                    style={styles.input}
                    placeholderTextColor={'#F0F0F0'}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry={true}
                    placeholderTextColor={'#F0F0F0'}
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style={{ color: '#F00', marginBottom: 12 }}>{error}</Text>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {loadingAuth ? (
                        <ActivityIndicator size={25} color={'#FFF'} />
                    ) : (
                        <Text style={styles.buttonText}>Login</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1d2e',
    },
    logo: {
        marginBottom: 18,
        width: 300,
        height: 125,
        objectFit: 'contain'
    },
    loginForm: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
    },
    input: {
        width: '95%',
        height: 40,
        backgroundColor: '#101026',
        marginBottom: 12,
        borderRadius: 4,
        paddingHorizontal: 8,
        color: '#FFF',
    },
    button: {
        width: '95%',
        height: 40,
        backgroundColor: '#3fffa3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#101026',
    },
})