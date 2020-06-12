import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HideWithKeyboard from 'react-native-hide-with-keyboard';

import background from '../../assets/background.png';

import { PageTitle, Button } from '../../components';

import {
    Container,
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
    Background,
} from './styles';

const PinCode = () => {
    const [code, setCode] = useState('55');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <Container>
            <Header>
                <Icon
                    name="arrow-left"
                    size={30}
                    style={{ marginBottom: 10 }}
                />
                <PageTitle
                    title={`Enter your ${'\n'}phone number`}
                    subtitle="We need your phone number so we can connect you with other
                users. Dont worry, users chosen by you will have access to it."
                />
            </Header>
            <PhoneContainer>
                <Label>Phone number</Label>
                <InputGroup>
                    <Select
                        selectedValue={code}
                        onValueChange={(itemValue) => setCode(itemValue)}
                    >
                        <Select.Item label="🇧🇷" value="55" />
                        <Select.Item label="🇺🇸" value="01" />
                    </Select>
                    <CountryCode>+{code}</CountryCode>
                    <Input
                        type="custom"
                        options={{
                            mask: `${
                                code === '55' ? '(99) 999999999' : '999 999 999'
                            }`,
                        }}
                        value={phoneNumber}
                        onChangeText={(phoneValue) =>
                            setPhoneNumber(phoneValue)
                        }
                        keyboardType="numeric"
                    />
                </InputGroup>
                <Button title="Next" />
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

export default PinCode;
