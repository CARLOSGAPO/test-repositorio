import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Country from './country';
import { useSelector, useDispatch } from 'react-redux';

const StyledcountryList = styled.div`
    display: grid;
    grid-row-gap: 2.3em;
    /*grid-template-columns: 1fr 1fr 1fr;*/
    background: var(--background);
    border: 1px solid red;
    justify-content: center;

    padding: 4em 2em;
`;

function CountryList() {
    const dispatch = useDispatch()
    const countryList = useSelector((state) => state.countryList)
    console.log('el estado de mi app es ', countryList)
    //const [countryList, setCountryList] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                return response.json()
            })
            .then((list) => {
                dispatch({
                    type: 'SET_COUNTRY_LIST',
                    payload: list
                })
                //setCountryList(data)
                console.log(list.length)
            })
            .catch(() => {
                console.log('Error carnal')
            })
    }, [])
    return (
        <StyledcountryList>
            {
                countryList.map(({ name, flag, population, capital, region }) => {
                    return (<Country
                        key={name}
                        flag={flag}
                        name={name}
                        population={population}
                        region={region}
                        capital={capital}
                    />
                    )
                })
            }

        </StyledcountryList>
    )
};

export default CountryList;