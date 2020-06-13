import React from 'react';
import PropTypes from 'prop-types';

import { Button, Text } from './styles';

const MainButton = ({ title, onPress }) => {
    return (
        <Button onPress={onPress}>
            <Text>{title}</Text>
        </Button>
    );
};

MainButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};

export default MainButton;
