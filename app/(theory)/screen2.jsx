import styled from 'styled-components/native';

export function Screen2() {
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