import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import HexagonTimer from './HaxagonTimer'; 
import './Timer.css';

const Timer = ({ time, isRunning, onEnd, isWork }) => {
  const [secondsLeft, setSecondsLeft] = useState(time * 60);
  const intervalRef = useRef(null);
  const onEndCalledRef = useRef(false);

  useEffect(() => {
    setSecondsLeft(time * 60);
    onEndCalledRef.current = false;
  }, [time]);

  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          if (!onEndCalledRef.current) {
            onEndCalledRef.current = true;
            setTimeout(() => {
              onEnd();
            }, 0);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isRunning, onEnd]);

  const formatTime = () => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return <HexagonTimer timeText={formatTime()} isWork={isWork} />;
};

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onEnd: PropTypes.func.isRequired,
  isWork: PropTypes.func.bool,
};

export default Timer;
