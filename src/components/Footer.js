import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Navegacion from './Nav'

const LinkHome = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
`;

const Footer = ({ title }) => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer
                css={css`
                    background-color: rgba(44, 62, 80);
                    padding: 1rem;
                    margin-top: 5rem;
                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0 auto;

                        @media (min-width: 768px) {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `}
                >

                    <Navegacion />
                    <LinkHome to='/'>
                        <h1>Hotel Gatsby</h1>
                    </LinkHome>
                    
                </div>
            </footer>
            <p
                css={css`
                    text-align: center;
                    color: #fff;
                    background-color: rgb(33, 44, 55);
                     margin: 0;
                    padding: 1rem;
                `}
            >
                {title}. Todos los derechos reservados {year} &copy;
            </p>
        </>
    )
}

export default Footer