import styled from 'styled-components';
import { FC } from 'react';
import ToggleThemeButton from '../../atoms/ToggleThemeButton/ToggleThemeButton';

const Wrapper = styled.header`
    position:fixed;
    top:0;
    width:100%;
    background-color:${({ theme }) => theme.element};
    box-shadown: 0px 0px 15px -10px rgba(0,0,0,0.3);
    z-index:990;
`;

const StyledContainer = styled.div`
    height:72px;
    max-width:1280px;
    display:flex;
    justify-content-space-between;
    align-items:center;
    margin:0 auto;
`;

const StyledTitle = styled.h1`
	padding: 1rem 1.5rem;
	font-size: 2.2rem;

	@media (min-width: 1024px) {
		font-size: 2.5rem;
	}
`;


type HeaderProps = {
    handleToggleTheme: () => void;
};

const Header: FC<HeaderProps> = ({ handleToggleTheme }) => (
    <Wrapper>
        <StyledContainer>
            <StyledTitle>Where in the world ?</StyledTitle>
            <ToggleThemeButton handleToggleTheme={handleToggleTheme} />
        </StyledContainer>

    </Wrapper>

);

export default Header;