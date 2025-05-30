import { SectionList } from 'react-native';
import styled from 'styled-components/native';

export function Section_List() {
	const dataSection = [{
            letter: 'a',
            data: [ // data: al parecer, esta palabra es reservada.
                {product: 'aceite', precio: '$2300'},
                {product: 'agua mineral', precio: '$1300'},
                {product: 'agua saborizada', precio: '$1600'},
                {product: 'ajo', precio: '$1000'},
                {product: 'alfajores', precio: '$1000'},
                {product: 'arroz', precio: '$1300'}
            ]
        },{
            letter: 'b',
            data: [
                {product: 'banana', precio: '$1000'}
            ]
        },{
            letter: 'c',
            data: [
                {product: 'cafe', precio: '$2300'},
                {product: 'cebolla', precio: '$1600'},
                {product: 'chicle', precio: '$2300'},
                {product: 'chizito', precio: '$1600'},
                {product: 'chocolatin', precio: '$1000'},
                {product: 'chupetín', precio: '$1000'},
                {product: 'cigarrillos', precio: '$1600'},
                {product: 'cocido', precio: '$1000'}
            ]
        },{
            letter: 'f',
            data: [
                {product: 'fideo', precio: '$1000'}
            ]
        },{
            letter: 'g',
            data: [
                {product: 'gaseosa', precio: '$1600'}
            ]
        },{
            letter: 'g',
            data: [
                {product: 'harina', precio: '$1600'}
            ]
        },{
            letter: 'j',
            data: [
                {product: 'jugo en polvo', precio: '$1600'}
            ]
        },{
            letter: 'm',
            data: [
                {product: 'mandioca', precio: '$2300'},
                {product: 'manzana', precio: '$1600'},
                {product: 'manzanilla', precio: '$1000'},
                {product: 'mayonesa', precio: '$2300'},
                {product: 'morrón', precio: '$2300'}
            ]
        },{
            letter: 'p',
            data: [
                {product: 'papa', precio: '$1000'},
                {product: 'pera', precio: '$1600'},
                {product: 'pure', precio: '$1000'}
            ]
        },{
            letter: 's',
            data: [
                {product: 'salchichas', precio: '$1000'},
                {product: 'sandia', precio: '$1300'},
                {product: 'soda', precio: '$1300'}
            ]
        },{
            letter: 't',
            data: [
                {product: 'tomate', precio: '$1600'},
                {product: 'tutuca', precio: '$1300'}
            ]
        },{
            letter: 'y',
            data: [
                {product: 'yerba', precio: '$1600'}
            ]
        },{
            letter: 'z',
            data: [
                {product: 'zanahoria', precio: '$1000'}
            ]
        }
    ];
    
    const renderItem = ({item}) => {
        return(<ContainerItem>
            <Product>{item.product}</Product>
            <Product>{item.precio}</Product>
        </ContainerItem>)
    };

    // section: palabra reservada.
    const renderHeader = ({section}) => {
        return(<HeaderText>{ section.letter }</HeaderText>);
    }

    const renderFooter = () => {
        return (<Footer>Footer Section</Footer>);
    }
    return (<Container>
        <Title>SectionList</Title>
        <SectionList
            sections={dataSection}
            renderSectionHeader={renderHeader}

            // este es el más interesante, ya que no le especifico que debe tratar con los valores de la propiedad
            // 'data' del objeto, sin embargo lo hace.
            renderItem={renderItem}
            renderSectionFooter={renderFooter}
        />
    </Container>);
}

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #000;
`;

const Title = styled.Text`
    color: #f1f2f0;
    border: #000;
    font-size: 30px;
    padding-top: 30px;
`;

// estilos para el rendeItem
const ContainerItem = styled.View`
    flex-direction: row;
    gap: 20px;
`;

const Product = styled.Text`
    color: #fff;
    font-size: 30px;
`;

const HeaderText = styled.Text`
    color: #555;
    font-weight: bold;
    fontSize: 35;
    margin-top: 30px;
`;

const Footer = styled.Text`
    color: #8f8;
    fontSize: 25;
    textAlign: center;
`;