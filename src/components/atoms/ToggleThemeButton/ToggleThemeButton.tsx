import styled from "styled-components";
import { ReactComponent as MoonIcon } from 'lib/icons/moon.svg';

type ToggleThemeButtonProps = {
    handleToggleTheme: () => void;
}

const Button = styled.button`
    display:flex;
    align-items:center;
    gap:0.5rem;
    border:none;
    padding:1rem 1.5rem;
    background-color:transparent;
    color:${({ theme }) => theme.text};
    font-weight:600;

    @media (min-width: 1024px) {
		cursor: pointer;
	}
`

const ToggleThemeButton = ({ handleToggleTheme }: ToggleThemeButtonProps) => {
    return (
        <Button onClick={handleToggleTheme}>
            <MoonIcon />
            Dark Mode
        </Button>
    );
};

export default ToggleThemeButton;