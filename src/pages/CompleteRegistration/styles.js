import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

import colors from '../../styles/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled.View`
    padding: 20px;
    position: relative;
    flex: 1;
`;

export const Content = styled.View`
    flex: 1;
    justify-content: space-around;
`;

export const ArrowIcon = styled(Icon)`
    font-size: 30px;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: ${colors.black};
`;

export const FacebookComplete = styled.TouchableOpacity`
    padding: 15px;
    border: 1px solid ${colors.lightGray};
    border-radius: 5px;
`;

export const FacebookCompleteText = styled.Text`
    color: ${colors.primary};
    font-size: 15px;
    text-align: center;
    font-weight: bold;
`;

export const InputContainer = styled.View``;

export const InputGroup = styled.View``;

export const Label = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${colors.gray};
`;

export const Input = styled.TextInput`
    padding: 6px;
    padding-left: 15px;
    border: 1px solid ${colors.lightGray};
    font-weight: bold;
    margin: 5px 0;
    border-radius: 5px;
`;

export const PhoneContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const PhoneNumber = styled.Text`
    font-size: 16px;
    color: ${colors.black};
`;

export const CheckIcon = styled(Icon)`
    font-size: 23px;
    color: ${colors.success};
`;

export const Text = styled.Text`
    color: #eee;
`;

export const Terms = styled.Text`
    text-align: center;
    color: ${colors.gray};
    font-style: italic;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const Background = styled.ImageBackground`
    width: ${screenWidth}px;
    position: absolute;
    height: 60px;
    z-index: -1;
    padding-bottom: 20px;
    bottom: 0px;
`;

export const SvgIcon = styled(Icon)`
    font-size: 16px;
    color: ${colors.white};
`;
