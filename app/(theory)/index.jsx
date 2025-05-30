import { useState } from 'react';
import styled from 'styled-components/native';
import { List } from './list';
import { Screen2 } from './screen2';

export default function Index() {
    const dataCategorias = [
        { id: 1, name: 'FlatList', component:<List/>},
        { id: 2, name: 'SectionList', component:<Screen2/>}
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
                            selected={selectedCategory.id === item.id}
                            onPress={() => setSelectedCategory(item)}
                        >
                            <CategoryName selected={selectedCategory.id === item.id}>{ item.name }</CategoryName>
                        </CategoryContainer>
                    )
                })
            }
        </CategoriaSection>
        <ContentComponent>
            {selectedCategory.component}
        </ContentComponent>
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

const ContentComponent = styled.View`
    flex: 1;
    width: 100%;
    marginTop: 20;
    backgroundColor: red;
`;