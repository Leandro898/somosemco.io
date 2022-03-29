import Navigation from '../components/NavBar';
import Container from '../components/Container';
import FooterP from "../components/Footer";
import Equipo from '../components/Equipo'

const Team = () => {
    return (
        <Container>
            {/* <div className='fondo' style={{height:'500px'}}>
            </div> */}
            <Equipo/>
            <FooterP className="bg-dark" />
        </Container>
    )
}

export default Team