import React from 'react';

import { Title, SubTitle } from './styles';

const PageTitle = ({ title, subtitle }) => {
    return (
        <>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </>
    );
};

export default PageTitle;
