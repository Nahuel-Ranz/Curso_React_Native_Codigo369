import { useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

// otra manera de importar una imagen.
import anyImageName from '../assets/images/react-logo.png';
import { darkTheme, lightTheme } from '../styles/theme';

export default function Screen1() {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    
    const currentTheme = isDarkTheme ? darkTheme : lightTheme;
    const data = {
        nombre: 'Frank',
        curso: 'React Native'
    }

    // Image source: para establecer la ruta, debemos 'requerirla'.
    // Se la requiere a la imagen, porque no está aquí. La imagen que fue importada, no se necesita requerirla.
    return (<ThemeProvider theme={currentTheme}>
        <Container>
            <Imagen source={anyImageName} />
            <Imagen source={require('../assets/images/icon.png')}/>
        </Container>
    </ThemeProvider>);
}

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