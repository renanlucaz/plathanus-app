import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HideWithKeyboard from 'react-native-hide-with-keyboard';

import background from '../../assets/background.png';
import { Button } from '../../components';

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
} from './styles';

const PhoneNumber = ({ navigation }) => {
    const [code, setCode] = useState('55');
    const [phoneNumber, setPhoneNumber] = useState('');

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
                <Button
                    title="Next"
                    onPress={() => navigation.navigate('Pin')}
                />
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
