import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li>good:     <span>{good}</span></li>
        <li>neutral: <span>{neutral}</span></li>
        <li>bad: <span>{bad}</span></li>
        <li>Total: <span>{total}</span></li>
        <li>Positiv feedback: <span>{positivePercentage}</span>%</li>
      </ul>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
