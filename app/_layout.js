import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
const Layout = () => {

    const [fontsLoaded] = useFonts({
        'DMBold': require('../jobsift-starter/assets/fonts/DMSans-Bold.ttf'),
        'DMMedium': require('../jobsift-starter/assets/fonts/DMSans-Medium.ttf'),
        'DMRegular': require('../jobsift-starter/assets/fonts/DMSans-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if(!fontsLoaded) return null;
    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout;