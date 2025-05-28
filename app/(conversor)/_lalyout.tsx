import { Stack } from "expo-router";

export default function ConversorLayout() {
    return (<Stack>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="conversor" options={{headerShown:false}}/>
    </Stack>);
}