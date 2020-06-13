import React from 'react';
import PropTypes from 'prop-types';

import { Title, SubTitle } from './styles';

const PageTitle = ({ title, subtitle }) => {
    return (
        <>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default PageTitle;
