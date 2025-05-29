// aquí definiremos, entre otras cosas, el tipo de navegación.
import { Stack } from "expo-router";

// Layout: aquí puede ser cualquier nombre. Pero respetaremos el seguimiento.
// En este _layout general, especificamos las carpetas a donde hemos de movernos, ya en cada una habrá su _layout.
// Aquí le indicamos "recordemos, con los paréntesis", que tiene que dirigirse hacia un grupo.
export default function RootLayout() {
    return (<Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(conversor)"/>
        <Stack.Screen name="(theory)"/>
    </Stack>);
}