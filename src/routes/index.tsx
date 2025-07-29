import React from 'react';

import { ActivityIndicator, View } from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
    const isAuthenticated = false;
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