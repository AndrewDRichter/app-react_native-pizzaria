import React, { useContext } from 'react';

import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import { AuthContext } from '../contexts/AuthContext';

function Routes() {
    const { isAuthenticated } = useContext(AuthContext);
    const loading = false;

    if (loading) {
        return (
            <View style={{ flex: 1, backgroundColor: '#1d1d2e', justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size={55} color={'#FFF'} />
            </View>
        )
    }

    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;