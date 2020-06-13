import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
} from './styles';
import background from '../../assets/background.png';

const PinCode = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

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
                        Weve send a PIN to <Span>+48 123 456 789,</Span> to
                        verify your phone number
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
                        />
                        <Input
                            keyboardType="numeric"
                            type="custom"
                            options={{
                                mask: '9',
                            }}
                            value={value1}
                            onChangeText={(text) => setValue1(text)}
                        />
                        <Input
                            keyboardType="numeric"
                            type="custom"
                            options={{
                                mask: '9',
                            }}
                            value={value2}
                            onChangeText={(text) => setValue2(text)}
                        />
                        <Input
                            keyboardType="numeric"
                            type="custom"
                            options={{
                                mask: '9',
                            }}
                            value={value3}
                            onChangeText={(text) => setValue3(text)}
                        />
                    </InputGroup>
                    <Label>PIN code</Label>
                </InputContainer>
                <Button
                    title="Next"
                    onPress={() => {
                        navigation.navigate('Complete');
                    }}
                />
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
