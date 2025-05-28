import { router } from 'expo-router';
import styled from 'styled-components/native';

export default function Conversor() {
    return (<Container>
        <Input placeholder='Enter your measurement number'></Input>
        <CalculateButton>
            <ButtonText>
                Calcular
            </ButtonText>
        </CalculateButton>
        <ResultText>Resultado: X</ResultText>
        <BackButton>
            <ButtonText onPress={() => router.back()}>
                Go Back
            </ButtonText>
        </BackButton>
    </Container>);
}

const Container = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    backgroundColor: #f7e7ce;
    gap: 30px;
`;

const Input = styled.TextInput`
    backgroundColor: white;
    border-radius: 10px;
    width: 80%;
    padding: 15px;
    fontSize: 20;
    color: brown;
`;

const CalculateButton = styled.TouchableOpacity`
    backgroundColor: #decf93;
    padding: 15px 30px;
    border-radius: 10px;
`;

const ResultText = styled.Text`
`;

const BackButton = styled.TouchableOpacity`
    backgroundColor: #decf93;
    padding: 15px 30px;
    border-radius: 10px;
`;

const ButtonText = styled.Text`
    fontSize: 25;
    fontWeight: bold;
    color: #614e3e;
`;