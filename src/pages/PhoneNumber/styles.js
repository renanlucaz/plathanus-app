import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { Dimensions } from 'react-native';
import colors from '../../styles/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled.View`
    padding: 20px;
    justify-content: space-between;
    position: relative;
    flex: 1;
`;

export const Header = styled.View``;

export const Label = styled.Text`
    font-size: 15px;
    color: ${colors.gray};
`;

export const PhoneContainer = styled.View`
    margin: 10px 0;
`;

export const InputGroup = styled.View`
    flex-direction: row;
    position: relative;
    align-items: center;
    margin: 10px 0;
`;

export const CountryCode = styled.Text`
    position: absolute;
    color: ${colors.gray};
    left: 105px;
`;

export const Select = styled.Picker`
    width: 90px;
`;

export const Input = styled(TextInputMask)`
    padding: 10px;
    padding-left: 45px;
    flex: 1;
    border: 1px solid ${colors.lightGray};
    border-radius: 5px;
`;

export const SignContainer = styled.KeyboardAvoidingView`
    align-items: center;
    position: relative;
`;

export const SignIn = styled.Text`
    font-size: 18px;
    text-align: center;
    color: ${colors.black};
`;

export const SignLink = styled.Text`
    font-size: 18px;
    text-align: center;
    margin-top: 15px;
    color: ${colors.primary};
`;

export const Background = styled.ImageBackground`
    width: ${screenWidth}px;
    padding-bottom: 20px;
    top: 20px;
    justify-content: center;
`;
