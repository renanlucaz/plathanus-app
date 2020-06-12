import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 25px 10px;
    background-color: ${colors.primary};
    height: 30px;
    border-radius: 5px;
`;

export const Text = styled.Text`
    color: #eee;
`;
