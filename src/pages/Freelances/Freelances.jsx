import React from 'react'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card/Card'
import colors from '../../utils/style/Color'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const FreelancesWrapper = styled.div `
    text-align:center;
`

const PageTitle = styled.h1 `
    margin-top: 50px;
    font-size: 30px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;
`
const PageSubtitle = styled.h3 `
    color: ${colors.secondary};
`

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Lauren Ipsum',
        jobTitle: 'UX Designer',
        picture: DefaultPicture
    }
]

function Freelances() {
    return (
        <FreelancesWrapper>
            <PageTitle>Trouver votre prestataire</PageTitle>
            <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous</PageSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </FreelancesWrapper>
    )
}

export default Freelances;