import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';

import api from '../../services/api';

import { Button } from '../../components';
import {
    Container,
    Content,
    Arrow,
    InputContainer,
    InputGroup,
    Input,
    Label,
    Background,
    Footer,
    PageTitle,
    Title,
    SubTitle,
    Span,
    SvgIcon,
} from './styles';
import background from '../../assets/background.png';

const PinCode = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [inputColor, setInputColor] = useState('#ccc');
    const [icon, setIcon] = useState('pin');

    useEffect(() => {
        async function fetchData() {
            const phone = await AsyncStorage.getItem('@CodeApi:phone');

            setPhoneNumber(phone);
        }
        fetchData();
    }, []);

    async function handleVerify() {
        const pin = value + value1 + value2 + value3;

        const token = await AsyncStorage.getItem('@CodeApi:token');

        const parsedPin = { pin };

        try {
            await api.post('validations', parsedPin, {
                headers: { Authorization: `Bearer ${token}` },
            });

            navigation.navigate('Complete');

            setInputColor('#89e0a9');
            setIcon('check');
        } catch (err) {
            setInputColor('#d02c2c');
            setIcon('close');
        }
    }

    // const inputValue = value + value1 + value2 + value3;
    return (
        <Container>
            <Content>
                <Arrow
                    name="arrow-left"
                    onPress={() => navigation.navigate('Phone')}
                />
                <PageTitle>
                    <Title>Enter PIN code</Title>
                    <SubTitle>
                        We send a PIN to <Span>{phoneNumber},</Span> to verify
                        your phone number
                    </SubTitle>
                </PageTitle>

                <InputContainer>
                    <InputGroup>
                        <Input
                            keyboardType="numeric"
                            type="custom"
                            options={{
                                mask: '9',
                            }}
                            value={value}
                            onChangeText={(text) => setValue(text)}
                            status={inputColor}
                        />
                        <Input
                            keyboardType="numeric"
                            type="custom"
                            options={{
                                mask: '9',
                            }}
                            value={value1}
                            onChangeText={(text) => setValue1(text)}
                            status={inputColor}
                        />
                        <Input
                            keyboardType="numeric"
                            type="custom"
                            options={{
                                mask: '9',
                            }}
                            value={value2}
                            onChangeText={(text) => setValue2(text)}
                            status={inputColor}
                        />
                        <Input
                            keyboardType="numeric"
                            type="custom"
                            options={{
                                mask: '9',
                            }}
                            value={value3}
                            onChangeText={(text) => setValue3(text)}
                            status={inputColor}
                        />
                    </InputGroup>
                    <Label status={inputColor}>
                        PIN code <SvgIcon name={icon} status={inputColor} />
                    </Label>
                </InputContainer>
                <Button title="Next" onPress={() => handleVerify()} />
            </Content>

            <Footer>
                <Background source={background} />
            </Footer>
        </Container>
    );
};

PinCode.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired,
    }).isRequired,
};

export default PinCode;
