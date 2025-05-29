import { router } from 'expo-router';
import { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

export default function Conversor() {
    const [cm, setCm] = useState('');
    const [result, setResult] = useState(null);

    const cmToM = () => {
        if(!cm) {
            Alert.alert('Error', 'Por favor, ingresa un valor en centímetros');
            return;
        }

        const mts = parseFloat(cm)/100;
        setResult(mts);
    };

    // onChangeText: capturará cada tipeo.
    return (<Container>
        <Input
            placeholder='Enter your measurement number'
            keyboardType="numeric"
            onChangeText={setCm}
        />
        <CalculateButton onPress={cmToM}>
            <ButtonText>
                Calcular
            </ButtonText>
        </CalculateButton>
        <ResultText>Resultado: {result!==null ? `${result} m` : '-'}</ResultText>
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