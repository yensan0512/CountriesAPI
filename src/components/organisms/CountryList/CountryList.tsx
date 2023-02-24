import { countryType } from "lib/types/country";
import styled from "styled-components";
import { FC } from 'react';

const Wrapper = styled.ul`
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(250px, 1fr));
    gap:5rem;
`;

type CountryListProps = {
    countries: countryType[];
};

const CountryList: FC<CountryListProps> = ({ countries }) => (
    <Wrapper>
        {countries.map((country, index) => (
            // <CountryListItem country={country} key={index} />
        ))}
    </Wrapper>

);

export default CountryList;