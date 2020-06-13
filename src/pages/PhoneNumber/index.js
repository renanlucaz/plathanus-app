import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AsyncStorage, Alert } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import * as Animatable from 'react-native-animatable';

import api from '../../services/api';
import background from '../../assets/background.png';

import {
    Container,
    PageTitle,
    Title,
    SubTitle,
    Label,
    InputGroup,
    Select,
    Input,
    Header,
    CountryCode,
    PhoneContainer,
    SignIn,
    SignLink,
    SignContainer,
    AroundSelect,
    ArrowIcon,
    Background,
    Button,
    Text,
    SvgIcon,
} from './styles';

const PhoneNumber = ({ navigation }) => {
    const [code, setCode] = useState('55');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    let phoneField = null;

    async function handleAddPhone() {
        const parsedPhone = `+${code}${phoneField.getRawValue()}`;
        setLoading(true);
        try {
            const response = await api.post('phones', { phone: parsedPhone });

            const { token } = response.data;

            try {
                await AsyncStorage.multiSet([
                    ['@CodeApi:token', token],
                    ['@CodeApi:phone', phone],
                ]);
            } catch (err) {
                Alert.alert('Erro', err);
            }

            navigation.navigate('Pin');
        } catch (err) {
            Alert.alert(
                'Ops, um erro aconteceu :(',
                'O número informado está em um formato incorreto ou já existe no sistema.'
            );
        }
        setLoading(false);
    }
    return (
        <Container>
            <Header>
                <ArrowIcon name="arrow-left" />
                <PageTitle>
                    <Title>Enter your {'\n'}phone number</Title>
                    <SubTitle>
                        We need your phone number so we can connect you with
                        other users. Dont worry, users chosen by you will have
                        access to it
                    </SubTitle>
                </PageTitle>
            </Header>
            <PhoneContainer>
                <Label>Phone number</Label>
                <InputGroup>
                    <AroundSelect>
                        <Select
                            selectedValue={code}
                            onValueChange={(itemValue) => setCode(itemValue)}
                        >
                            <Select.Item label="🇧🇷" value="55" />
                            <Select.Item label="🇺🇸" value="01" />
                        </Select>
                    </AroundSelect>
                    <CountryCode>+{code}</CountryCode>
                    <Input
                        type="cel-phone"
                        options={{
                            maskType: `${
                                code === '55' ? 'BRL' : 'INTERNATIONAL'
                            }`,
                        }}
                        value={phone}
                        onChangeText={(phoneValue) => setPhone(phoneValue)}
                        keyboardType="numeric"
                        ref={(text) => {
                            phoneField = text;
                        }}
                    />
                </InputGroup>
                <Button onPress={() => handleAddPhone()}>
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
                        <Text>Sign up</Text>
                    )}
                </Button>
            </PhoneContainer>
            <SignContainer>
                <HideWithKeyboard>
                    <SignIn>Already have an account?</SignIn>
                    <Background source={background}>
                        <SignLink>Sing in</SignLink>
                    </Background>
                </HideWithKeyboard>
            </SignContainer>
        </Container>
    );
};

PhoneNumber.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default PhoneNumber;
