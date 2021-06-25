import React from 'react';
import styled from 'styled-components';

const Styledcountry = styled.div`
    width: 16.5rem;
    
    
    text-align: left;
    border-radius: 5px ;
    box-shadow: 0 0 7px 2px rgba(0,0,0,.03);
    margin: 1em;
    overflow: hidden;
    background-color: #ffffff;

    img {
        width: 100%;
        height: 160px;
        objet-fit: cover;
       
    }

    .details{
        padding: 1.5em;
       
    }
    h2{
        margin: 0;
        margin-bottom: 1rem;
        font-size: 18px;
    }
    p{
        font-size: .9em;
        margin-bottom: .5rem;
    }
    
    
`

function Country ({
    flag,
    name,
    population,
    region,
    capital,
}) {
    
    return (
        <Styledcountry>
            
            <img loading="lazy" src={flag} alt=""/>
            <div className="details">
            <h2> {name} </h2>
            <p><strong>Population: </strong>{population}</p>
            <p><strong>Capital: </strong>{capital}</p>
            <p><strong>Region:  </strong>{region}</p>
            </div>
        </Styledcountry>
    )
};

export default Country;



