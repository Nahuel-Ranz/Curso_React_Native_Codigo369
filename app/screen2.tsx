import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Screen2() {
    const router = useRouter();
    const { nombre, curso } = useLocalSearchParams()

    return (<View>
        <Text style={{marginTop: 30, textAlign:'center'}}>MAIN. MR. {nombre} </Text>
        <Text style={{marginTop: 30, textAlign:'center'}}>CURSO: {curso} </Text>

        <Button title="Go Back" onPress={() => router.back()}></Button>
    </View>);
}