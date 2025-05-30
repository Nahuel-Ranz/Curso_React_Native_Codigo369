import { useState } from 'react';
import styled from 'styled-components/native';

export default function Index() {
    const dataCategorias = [
        { id: 1, name: 'FlatList'},
        { id: 2, name: 'SectionList'}
    ];

    const [selectedCategory, setSelectedCategory] = useState(dataCategorias[0]);
    
    return (<Container>
        <Title>Seleccione una categoria</Title>
        <CategoriaSection>
            {
                dataCategorias.map((item) => {
                    return (
                        <CategoryContainer
                            key={ item.id }
                            selected={selectedCategory.id === item.id}// esta propiedad nativa no existe, la vamos a crear.
                            onPress={() => setSelectedCategory(item)}
                        >
                            <CategoryName selected={selectedCategory.id === item.id}>{ item.name }</CategoryName>
                        </CategoryContainer>
                    )
                })
            }
        </CategoriaSection>
    </Container>);
}

const Container = styled.View`
    flex: 1;
    backgroundColor: #000;
    alignItems: center;
`;

const Title = styled.Text`
    color: #f1f2f0;
    border: #000;
    font-size: 30px;
    padding-top: 30px;
`;

const CategoriaSection = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    marginTop: 8;
`;

const CategoryContainer = styled.TouchableOpacity`
    backgroundColor: ${(props) => (props.selected ? 'darkgreen' : 'transparent')};
    padding: 10px;
    border-radius: 8px;
    border: ${(props) => (props.selected ? "2px solid white" : "transparent")};
    alignItems: center;
`;

const CategoryName = styled.Text`
    fontSize: 24;
    color: ${ (props) => (props.selected ? "white" : "lightgreen")}
`;