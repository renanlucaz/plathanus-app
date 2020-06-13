import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled.View`
    padding: 20px;
    justify-content: space-between;
    position: relative;
    flex: 1;
`;

export const Header = styled.View``;

export const PageTitle = styled.View``;

export const Title = styled.Text`
    font-size: 28px;
    color: ${colors.black};
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    color: ${colors.gray};
    margin-top: 15px;
`;

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
    left: 115px;
`;

export const Select = styled.Picker`
    width: 90px;
`;

export const ArrowIcon = styled(Icon)`
    font-size: 30px;
    margin-bottom: 10px;
`;

export const Input = styled(TextInputMask)`
    flex: 1;
    padding: 10px;
    padding-left: 45px;
    margin-left: 10px;
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

export const AroundSelect = styled.View`
    border: 1px solid ${colors.lightGray};
    border-radius: 5px;
`;

export const Background = styled.ImageBackground`
    width: ${screenWidth}px;
    padding-bottom: 20px;
    top: 20px;
    justify-content: center;
`;
