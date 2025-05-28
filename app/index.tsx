import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, TouchableHighlight } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from '../styles/theme';

export default function Screen1() {
    const [count, setCount] = useState(0);
    const onpress = () => setCount(prev => prev+1);

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    const router = useRouter();
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;
    const data = {
        nombre: 'Frank',
        curso: 'React Native'
    }

    return (<ThemeProvider theme={currentTheme}>
        <Container>
            <TouchableHighlight onPress={onpress} underlayColor="#002200">
                <Title>LOG IN</Title>
            </TouchableHighlight>

            <Button title="LOG IN" onPress={() => router.push({
                pathname: '/screen2',
                params: data
            })}></Button>
            <Button title="Change Theme" onPress={toggleTheme}></Button>

            <Title>{count}</Title>
        </Container>
    </ThemeProvider>);
}

const Title = styled.Text`
    color:#00ff00;
    font-size: 150;
`

const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    flex: 1;
`