import { useState } from "react";
import { ScrollView } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import anyImageName from '../assets/images/react-logo.png';
import { darkTheme, lightTheme } from '../styles/theme';

export default function Screen1() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;
    const data = {
        nombre: 'Frank',
        curso: 'React Native'
    }

    // ScrollView: siempre rodea a las vistas enteras, ya que pueden no mostrar todo su contenido en una sola pantalla.
    // NOTA PERSONAL:: Conflicto: ScrollView vs flex
    // TextInput:: equivalen al 'input' en HTML.
    // El TextInput con un 'value' será estático.
    // TextInput prop: keyboradType: indica el tipo de entrada.
    return (<ThemeProvider theme={currentTheme}>
        <ScrollView>
            <Container>
                <Imagen source={anyImageName} />
                <Imagen source={require('../assets/images/icon.png')}/>
                <Intro placeholder="enter a number" keyboardType="numeric"></Intro>
            </Container>
        </ScrollView>
        
    </ThemeProvider>);
}

const Intro = styled.TextInput`
    backgroundColor: #ddd;
    color: #000;
`

const Imagen = styled.Image`
    width: 100;
    height: 100;
`

const Title = styled.Text`
    color:#00ff00;
    font-size: 150;
`

const Container = styled.View`
    background-color: ${({theme}) => theme.colors.background};
    flex: 1;
    justifyContent: center;
    alignItems: center;
`