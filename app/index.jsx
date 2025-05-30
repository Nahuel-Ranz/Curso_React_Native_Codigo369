import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FlatList, Platform, StatusBar, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export default function Component() {
    
    const routes = [
        {name: 'conversor', ref: "/(conversor)"},
        {name: 'theory', ref: "/(theory)"}
    ];

    const renderItem = ({item}) => {
        return (<TouchableOpacity onPress={() => router.push(item.ref)}>
            <LinkButton href={item.ref}>
                <IconContainer>
                    <MaterialIcons name='insert-drive-file' size={24} color='green'/>
                    <Name>{item.name}</Name>
                </IconContainer>
                <Arrow name='arrow-right'/>
            </LinkButton>
        </TouchableOpacity>);
    }

    // Con el Platform nos aseguramos de que el dispositivo sobre el que se ejecuta nuestra aplicación será o no IOS.
    return (<Container style={{ paddingTop: Platform.OS === 'ios' ? 0 : 50 }}>
        <StatusBar barStyle={'auto'}></StatusBar>
        <Title style={{marginTop:50}}>Menu</Title>
        <List
            keyExtractor={(item) => item.name}
            data={routes}
            renderItem={renderItem}
        />
    </Container>);
}

// SafeAreaView: brinda valores definidos para dispositivos IOS.
const Container = styled.SafeAreaView`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    gap: 15px;
    backgroundColor: black;
`;

const Title = styled.Text`
    color: white;
    fontSize: 30;
`;

const LinkButton = styled.View`
    border: 2px solid #333;
    border-radius: 20px;
    padding: 10px;
    marginBottom: 15;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Name = styled.Text`
    color: lightgreen;
    fontSize: 27;
`;

const Arrow = styled(MaterialIcons)`
    color: green;
    fontSize: 40;
`;

const List = styled(FlatList)`
    width: 100%;
    padding: 10px;
`;

const IconContainer = styled.View`
    gap: 10;
    flex-direction: row;
    align-items: center;
`;