import { Stack } from "expo-router";

export default function TheoryLayout() {
    return (<Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index' />
        <Stack.Screen name='screen2' />
    </Stack>);
}