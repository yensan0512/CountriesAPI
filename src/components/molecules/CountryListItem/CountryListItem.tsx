import { ViewWrapper } from "components/atoms/ViewWrapper/ViewWrapper";
import { countryType } from "lib/types/country";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DetailList } from "components/atoms/DetailList/DetailList";

const Wrapper = styled(ViewWrapper)`
    display:flex;
    flex-direction:column;
    justify-content:space-between;

    @media ( minp-width:1024px ){
        translation:box-shadow 0.2s linear;
        cursor:pointer;

        &:hover{
            box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
        }
    }
`;

const StyledImage = styled.img`
    width:100%;
    border-top-left-radius:5px;
    border-top-right-radius:5px;
    aspect-ratio:160/98;
    object-fit:cover;
`;

const StyledContent = styled.div`
    padding: 2.5rem 2.5rem 4rem 2.5rem;
`;

const StyledTitle = styled.h3`
    margin-bottom:1rem;
`;

type CountryListItemProps = {
    country: countryType;
}


const CountryListItem = ({ country: { name, population, region, capital, flag } }: CountryListItemProps) => (
    <Wrapper as='li'>
        <Link to={`country/${name.toLowerCase()}`}>
            <StyledImage src={flag} alt={`National flag of ${name}`} />
            <StyledContent>
                <StyledTitle>{name}</StyledTitle>
                <DetailList>
                    <p>
                        Population:<span>{(population)}</span>
                    </p>
                    <p>
                        Region:<span>{region}</span>
                    </p>
                    <p>
                        Capital:<span>{capital}</span>
                    </p>
                </DetailList>
            </StyledContent>
        </Link>
    </Wrapper>

);


export default CountryListItem