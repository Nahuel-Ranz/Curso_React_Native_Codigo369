import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export default function Component() {
    
    // Lista: en este arreglo 'routes', se encuentran los datos, que son objetos.
    const routes = [
        {name: 'conversor'},
        {name: 'theory'}
    ]

    // Componente: imprime el valor '*.name' del objeto que recibe.
    const renderItem = ({item}) => (
        <Title>{item.name}</Title>
    )

    return (<Container>
        <Title>Menu</Title>
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