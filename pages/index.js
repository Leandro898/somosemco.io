import Navigation from "../components/NavBar";
import Container from "../components/Container";
import Carrusel from "../components/Carrusel";
import FooterP from "../components/Footer";

const Index = () => {
  return (
    <di>
      <Container>
        <Carrusel />
      </Container>
      <FooterP className="bg-dark" />
    </di>
  );
};

export default Index;
