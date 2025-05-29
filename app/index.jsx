import { FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native';

// uso de Link para el enrutamiento dinámico
import { Link } from 'expo-router';

export default function Component() {
    
    // Como segunda propiedad de cada objeto(grupo) le agregamos su ruta(absoluta desde 'app')
    const routes = [
        {name: 'conversor', ref: "/(conversor)"},
        {name: 'theory', ref: "/(theory)"}
    ];

    // Implementación del Link. Requiere una prop. href.
    const renderItem = ({item}) => {
        return (<Link href={item.ref}>
            <Title>{item.name}</Title>
        </Link>);
    }

    return (<Container>
        <StatusBar barStyle={'auto'}></StatusBar>
        <Title style={{marginTop:50}}>Menu</Title>
        <FlatList
            keyExtractor={(item) => item.name}   // "extrae" un 'id' del elemento si es que este no lo tiene.
            data={routes}            // trabaja con el arreglo antes definido.
            renderItem={renderItem}  // renderiza cada elemento de la lista con la que se trabaja, en este caso, el arreglo.
        />
    </Container>);
}

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

const Title = styled.Text`

`;