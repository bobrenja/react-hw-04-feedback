import React, { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import css from './App.module.css';

const BTN_GROUP = ['good', 'neutral', 'bad'];

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const countTotalFeedback = () => good + neutral + bad;

  const changeFeedback = name => {
    setState(prevState => {
      return { ...prevState, [name]: prevState[name] + 1 };
    });
  };

  const countPositiveFeedbackPercentage = () => {
    const res = (good / countTotalFeedback()) * 100;
    return res ? Number(res.toFixed(1)) : 0;
  };

  return (
    <div className={css.main}>
      <Section title="Feedback caffe Expresso">
        <FeedbackOptions options={BTN_GROUP} onLeaveFeedback={changeFeedback} />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};
