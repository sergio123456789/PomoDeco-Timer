import PropTypes from 'prop-types';
import './HexagonTimer.css';

const HexagonTimer = ({ timeText, isWork }) => {
  return (
    <div className="hexagon-timer">
      <div className="time-divtext">
        <span className="time-text">
          {timeText}
          <h2 className="time-h2text">{isWork ? 'Trabajo' : 'Descanso'}</h2>
        </span>
      </div>
    </div>
  );
};

HexagonTimer.propTypes = {
  timeText: PropTypes.string.isRequired,
  isWork: PropTypes.bool,
};

export default HexagonTimer;
