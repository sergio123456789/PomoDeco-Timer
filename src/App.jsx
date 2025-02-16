import { useState, useCallback, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Timer from './components/timer/Timer';
import Button from './components/button/Button';
import NumberSteppers from './components/button/NumberSteppers';
import './App.css';

function App() {
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);

  const [time, setTime] = useState(workTime);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      setTime(isWork ? workTime : breakTime);
    }
  }, [workTime, breakTime, isWork, isRunning]);

  const handleStartPause = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTime(isWork ? workTime : breakTime);
    setResetKey((prev) => prev + 1);
  }, [isWork, workTime, breakTime]);

  const handleEnd = useCallback(() => {
    setIsWork((prevIsWork) => {
      const newIsWork = !prevIsWork;
      setTime(newIsWork ? workTime : breakTime);
      return newIsWork;
    });
    setIsRunning(false);
  }, [workTime, breakTime]);

  return (
    <Container fluid className="app">
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <h2 className="h2text">PomoDeco Timer</h2>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 3, order: 1 }}
          sm={{ span: 6, order: 1 }}
        >
          <div className="inputs">
            <label className="labelNumberSteppers">Trabajo</label>
            <NumberSteppers
              initialValue={workTime}
              min={0}
              step={1}
              max={60}
              onChange={setWorkTime}
            />
          </div>
        </Col>
        <Col
          xs={{ span: 12, order: 3 }}
          md={{ span: 6, order: 2 }}
          sm={{ span: 12, order: 3 }}
          className="mt-5"
        >
          <Timer
            key={resetKey}
            time={time}
            isRunning={isRunning}
            onEnd={handleEnd}
            isWork={isWork}
          />
        </Col>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 3, order: 3 }}
          sm={{ span: 6, order: 2 }}
        >
          <div className="inputs">
            <label className="labelNumberSteppers">Descanso</label>
            <NumberSteppers
              initialValue={breakTime}
              min={0}
              step={1}
              max={60}
              onChange={setBreakTime}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          className="d-flex justify-content-center align-items-center"
        >
          <Button
            isRunning={isRunning}
            onStartPause={handleStartPause}
            onReset={handleReset}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
