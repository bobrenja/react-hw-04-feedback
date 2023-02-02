import css from './Feedback.module.css';
import PropTypes from 'prop-types';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.button_block}>
      {options.map(e => (
        <button
          className={css.button}
          key={e}
          type="button"
          onClick={() => onLeaveFeedback(e)}
        >
          {e}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
