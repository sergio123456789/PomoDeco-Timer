import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import './Button.css';
const Button = ({ isRunning, onStartPause, onReset }) => {
  return (
    <>
      <Container fluid className="button-container">
        <Row className="align-items-center justify-content-center">
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-start"
          >
            <button className="buttondeco" onClick={onStartPause}>
              {isRunning ? 'Pausar' : 'Iniciar'}
            </button>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <button className="buttondeco" onClick={onReset}>
              Reiniciar
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Button.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  onStartPause: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Button;
