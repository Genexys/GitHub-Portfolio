import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
     padding: 20px;
    background-color: #282c34;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Logo = styled.img`
    height: 64px;
    margin-bottom: 20px;
    pointer-events: none;
`;

const Title = styled.h1`
    margin: 0;
`;

const Header = ({logo}) => {
    return (
        <div>
            <HeaderContainer>
                <Logo src={logo} className="App-logo" alt="logo" />
                <Title>
                    My GitHub Portfolio
                </Title>
            </HeaderContainer>
        </div>
    );
};

export default Header;
