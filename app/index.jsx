import { FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native';

// uso de Link para el enrutamiento dinámico
import { Link } from 'expo-router';

// uso de iconos
import { MaterialIcons } from '@expo/vector-icons';

export default function Component() {
    
    // Como segunda propiedad de cada objeto(grupo) le agregamos su ruta(absoluta desde 'app')
    const routes = [
        {name: 'conversor', ref: "/conversor"},
        {name: 'theory', ref: "/theory"}
    ];

    // Implementación del Link. Requiere una prop. href.
    const renderItem = ({item}) => {
        return (<LinkButton href={item.ref}>
            <MaterialIcons name='insert-drive-file' size={24}/>
            <Title>{item.name}</Title>
        </LinkButton>);
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
    gap: 15px;
`;

const Title = styled.Text`

`;

// estilos para el renderItem.
// como Link no es nativo, sino que viene de expo-router, lo indicamos entre paréntesis.
const LinkButton = styled(Link)`
    border: 2px solid #333;
    border-radius: 20px;
    padding: 10px;
    marginBottom: 15;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;