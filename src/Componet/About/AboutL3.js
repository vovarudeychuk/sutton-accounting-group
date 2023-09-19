import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const featureData = [
  { icon: 'las la-angle-right', text: 'Perfect Design' },
  { icon: 'las la-angle-right', text: 'More Flexible' },
  { icon: 'las la-angle-right', text: 'High Performance' },
  { icon: 'las la-angle-right', text: 'Key Features' },
  { icon: 'las la-angle-right', text: 'Based On Bootstrap 4' },
  { icon: 'las la-angle-right', text: 'Built with Sass' },
];

function AboutL3() {
  return (
    <section className="py-4">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="12" lg="6">
            <img src={require("../../assets/images/about/06.png")} alt="Image6" className="img-fluid" />
          </Col>
          <Col xs="12" lg="5" mt="5" mt-lg="0">
            <div className="mb-4">
              <h2><span className="font-w-4 d-block">Easily manage</span> your own business</h2>
              <p className="lead mb-0">We use the latest technologies it voluptatem accusantium doloremque laudantium.</p>
            </div>
            <Row noGutters>
              <Col sm="6">
                {featureData.slice(0, 3).map((feature, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <i className={feature.icon}></i>
                      </div>
                      <p className="mb-0 ms-3">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </Col>
              <Col sm="6">
                {featureData.slice(3).map((feature, index) => (
                  <div key={index} className="mb-3">
                    <div className="d-flex align-items-center">
                      <div>
                        <i className={feature.icon}></i>
                      </div>
                      <p className="mb-0 ms-3">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
            <Button href="/" color="outline-primary" className="mt-4">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutL3;
