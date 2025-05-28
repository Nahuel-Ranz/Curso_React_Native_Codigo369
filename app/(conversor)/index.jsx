import styled from 'styled-components/native';

export default function Component() {
    return (<Container>
        <Texto>Componente</Texto>
    </Container>);
}

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

const Texto = styled.Text`

`;