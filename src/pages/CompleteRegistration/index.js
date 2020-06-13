import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage, Alert } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import * as Animatable from 'react-native-animatable';

import api from '../../services/api';
import background from '../../assets/background.png';
import Button from '../../components/Button';

import {
    Container,
    Content,
    ArrowIcon,
    Title,
    FacebookComplete,
    FacebookCompleteText,
    InputContainer,
    InputGroup,
    Label,
    Input,
    PhoneContainer,
    CheckIcon,
    PhoneNumber,
    Terms,
    Background,
    Text,
    SvgIcon,
} from './styles';

const CompleteRegistration = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const phone = await AsyncStorage.getItem('@CodeApi:phone');

            setPhoneNumber(phone);
        }
        fetchData();
    }, []);

    async function handleSubmit() {
        setLoading(true);
        const data = { name, email, password };
        const token = await AsyncStorage.getItem('@CodeApi:token');

        if (!name || !email || !password) {
            return Alert.alert(
                'Não deixe campos em branco!',
                'Suas informações são importantes pra gente :)'
            );
        }

        if (password && password.length < 6) {
            return Alert.alert(
                'A senha deve conter no mínimo 6 caracteres',
                'É recomendável ter senhas fortes'
            );
        }

        if (email && (email.indexOf('@') === -1 || email.indexOf('.') === -1)) {
            return Alert.alert(
                'Formato incorreto',
                'O email informado está em um formato incorreto'
            );
        }

        try {
            await api.post('users', data, {
                headers: { Authorization: `Bearer ${token}` },
            });

            navigation.navigate('Phone');
            Alert.alert(
                'Você foi cadastrado com sucesso!',
                `Bem vindo ao nosso sistema ${name} :)`
            );

            AsyncStorage.clear();
        } catch (err) {
            Alert.alert(err);
        }
        setLoading(false);
        return true;
    }

    return (
        <Container>
            <HideWithKeyboard>
                <ArrowIcon
                    name="arrow-left"
                    onPress={() => navigation.navigate('Pin')}
                />
            </HideWithKeyboard>

            <Content>
                <HideWithKeyboard>
                    <Title>Complete registration</Title>
                </HideWithKeyboard>
                <HideWithKeyboard>
                    <FacebookComplete>
                        <FacebookCompleteText
                            onPress={() =>
                                Alert.alert(
                                    'Ops',
                                    'Essa funcionalidade será implementada em features futuras'
                                )
                            }
                        >
                            Complete using Facebook
                        </FacebookCompleteText>
                    </FacebookComplete>
                </HideWithKeyboard>

                <InputGroup>
                    <InputContainer>
                        <Label>Full name</Label>
                        <Input
                            placeholder="Your name"
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input
                            placeholder="user@email.com"
                            value={email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(text) => setEmail(text)}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input
                            placeholder="Your password"
                            secureTextEntry
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </InputContainer>
                    <InputContainer>
                        <HideWithKeyboard>
                            <Label>Phone number</Label>
                        </HideWithKeyboard>

                        <HideWithKeyboard>
                            <PhoneContainer>
                                <PhoneNumber>{phoneNumber}</PhoneNumber>
                                <CheckIcon name="check" />
                            </PhoneContainer>
                        </HideWithKeyboard>
                    </InputContainer>
                </InputGroup>
                <InputContainer>
                    <HideWithKeyboard>
                        <Terms>By clicking Sign up you agree to our T&C</Terms>
                    </HideWithKeyboard>

                    <Button title="Sign up" onPress={() => handleSubmit()}>
                        {loading ? (
                            <Animatable.View
                                animation="rotate"
                                iterationCount="infinite"
                                duration={800}
                                easing="linear"
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <SvgIcon name="loading" />
                            </Animatable.View>
                        ) : (
                            <Text>Sign in</Text>
                        )}
                    </Button>
                </InputContainer>
            </Content>
            <Background source={background} />
        </Container>
    );
};

CompleteRegistration.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default CompleteRegistration;
