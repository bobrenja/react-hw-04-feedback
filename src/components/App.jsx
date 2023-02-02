import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedback/FeedbackOptions';
import css from './App.module.css';

class App extends Component {
  static defaultProps = {};
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonGroup = ['good', 'neutral', 'bad'];

  changeFeedback = name => {
    this.setState(prevState => {
      // console.log(prevState);
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const res = (this.state.good / this.countTotalFeedback()) * 100;
    return res ? Number(res.toFixed(1)) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.main}>
        <Section title="Feedback caffe Expresso">
          <FeedbackOptions
            options={this.buttonGroup}
            onLeaveFeedback={this.changeFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export { App };
