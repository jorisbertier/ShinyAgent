import DefaultPicture from '../../assets/profile.png'
import Card from '../Card/Card'
 
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
]

function Freelance() {
  return <div>
      <h1>Freelance</h1>
      <ul> {freelanceProfiles.map((freelance, index) => (
        <Card
            key={index}
            abel={freelance.name}
            title={freelance.jobTitle}
            picture={freelance.picture}
        />
      ))}
      </ul>
  </div>
}

export default Freelance