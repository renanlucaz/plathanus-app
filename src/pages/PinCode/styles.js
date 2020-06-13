import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInputMask } from 'react-native-masked-text';
import { Dimensions } from 'react-native';

import colors from '../../styles/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const Content = styled.View`
    padding: 20px;
    justify-content: space-between;
    flex: 1;
`;

export const Arrow = styled(Icon)`
    font-size: 30px;
`;

export const InputContainer = styled.View`
    margin: 15px 0;
`;

export const InputGroup = styled.View`
    flex-direction: row;
    height: 70px;
`;

export const Input = styled(TextInputMask)`
    flex: 1;
    font-size: 18px;
    text-align: center;
    border-radius: 5px;
    margin: 0 10px;
    border: 1px solid ${colors.gray};
`;

export const Label = styled.Text`
    color: ${colors.gray};
    font-size: 15px;
    margin-left: 10px;
    margin-top: 10px;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    top: 20px;
    justify-content: center;
`;

export const Footer = styled.View`
    width: ${screenWidth}px;
    position: relative;
    z-index: -4;
    height: 30%;
`;

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

export const Span = styled.Text`
    font-weight: bold;
`;
