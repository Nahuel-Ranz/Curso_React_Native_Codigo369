import { Stack } from "expo-router";

export default function ConversorLayout() {
    return (<Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="conversor"/>
    </Stack>);
}