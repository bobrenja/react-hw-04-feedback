import React, { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttonGroup = ['good', 'neutral', 'bad'];

  const changeFeedback = name => {
    if (name === 'good') setGood(() => good + 1);
    if (name === 'neutral') setNeutral(() => neutral + 1);
    if (name === 'bad') setBad(() => bad + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () => {
    const res = (good / countTotalFeedback()) * 100;
    return res ? Number(res.toFixed(1)) : 0;
  };

  return (
    <div className={css.main}>
      <Section title="Feedback caffe Expresso">
        <FeedbackOptions
          options={buttonGroup}
          onLeaveFeedback={changeFeedback}
        />
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
