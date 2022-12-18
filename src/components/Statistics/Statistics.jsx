import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const feedbacks = total();
  return (
    <>
      {feedbacks > 0 ? (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{total()}</li>
          <li>Positive feedback: {positivePercentage()}%</li>
        </ul>
      ) : (
        <Notification />
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
