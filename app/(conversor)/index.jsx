import { router } from 'expo-router';
import styled from 'styled-components/native';

export default function Index() {
    return (<Container>
        <Icon source='https://i.ibb.co/GXQgJwD/measurement.png'/>
        <Title>Conversor</Title>
        <SubTitle>(cm) a (m)</SubTitle>
        <StartButton onPress={() => router.push('/conversor')}>
            <ButtonText>CONVERTIR</ButtonText>
        </StartButton>
    </Container>);
}

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f7e7ce;
`;

const Title = styled.Text`
    fontSize: 50;
    fontWeight: bold;
    color: #614e3e;
    marginBottom: 20;
`;

const SubTitle = styled.Text`
    fontSize: 40;
    fontWeight: bold;
    color: #614e3e;
    marginBottom: 40;
`;

const StartButton = styled.TouchableOpacity`
    backgroundColor: #decf93;
    padding: 15px 30px;
    border-radius: 10px;
`;

const ButtonText = styled.Text`
    fontSize: 25;
    fontWeight: bold;
    color: #614e3e;
`;

const Icon = styled.Image`
    width: 150px;
    height: 150px;
    margin-bottom: 20px;
`;