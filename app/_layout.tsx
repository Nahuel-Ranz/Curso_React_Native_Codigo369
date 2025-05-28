// aquí definiremos, entre otras cosas, el tipo de navegación.
import { Stack } from "expo-router"

// Layout: aquí puede ser cualquier nombre. Pero respetaremos el seguimiento.
export default function Layout() {
    <Stack>
        <Stack.Screen name="index"/>
        <Stack.Screen name="conversor"/>
    </Stack>
}