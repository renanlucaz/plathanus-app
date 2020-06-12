import React from 'react';

import { Button, Text } from './styles';

const MainButton = ({ title }) => {
    return (
        <Button>
            <Text>{title}</Text>
        </Button>
    );
};

export default MainButton;
