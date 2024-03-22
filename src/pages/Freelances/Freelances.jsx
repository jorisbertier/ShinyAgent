import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card/Card'
import colors from '../../utils/style/Color'
import { Loader } from '../../utils/style/Atoms'


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

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

// const freelanceProfiles = [
//     {
//         name: 'Jane Doe',
//         jobTitle: 'Devops',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'John Doe',
//         jobTitle: 'Developpeur frontend',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'Jeanne Biche',
//         jobTitle: 'Développeuse Fullstack',
//         picture: DefaultPicture,
//     },
//     {
//         name: 'Lauren Ipsum',
//         jobTitle: 'UX Designer',
//         picture: DefaultPicture
//     }
// ]


function Freelances() {
    const [freelancersList, setFreelancesList] = useState([])
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        async function fetchProfil() {
            try{
                const response = await fetch(`http://localhost:8000/freelances`);
                const { freelancersList } = await response.json();
                setFreelancesList(freelancersList);
                console.log(freelancersList)
                
            }catch(err){
                console.log(err)
            }finally {
                setLoading(false)
            }
        }
        fetchProfil()
    }, [])

    return (
        <FreelancesWrapper>
            <PageTitle>Trouver votre prestataire</PageTitle>
            <PageSubtitle>Chez Shiny nous réunissons les meilleurs profils pour vous</PageSubtitle>
            <CardsContainer>

            {isLoading ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            )
            : ( <>
                {freelancersList.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.job}
                        title={profile.name}    
                        picture={profile.picture}
                    />
                ))}
                </>
            ) }

            </CardsContainer>
            {/* <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                    />
                ))}
            </CardsContainer> */}
        </FreelancesWrapper>
    )
}

export default Freelances;