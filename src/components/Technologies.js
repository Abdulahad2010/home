import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bootstrap from "../assets/img/bootstrap.png";
import react from "../assets/img/react.png";
import sass from "../assets/img/sass1.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";



export const Technologies = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return(
        <section className="technologies" id="technologies">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Technologies</h2>
                        <p>I like to work with</p>
                        <div className="technologies-bx">
                            
                            <Carousel responsive={responsive} infinite={true} className="technologies-slider">
                                <div className="item">
                                    <h5>Bootstrap</h5>
                                    <img src={bootstrap} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>React</h5>
                                    <img src={react} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>SASS</h5>
                                    <img src={sass} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>HTML</h5>
                                    <img src={html} alt="Image" />
                                </div>
                                <div className="item">
                                    <h5>CSS</h5>
                                    <img src={css} alt="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}