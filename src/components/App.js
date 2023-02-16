import { Component } from 'react';
import { Container } from './App.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnGoodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  btnNeutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  btnBadClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const totalStats = this.state.good + this.state.neutral + this.state.bad;
    return totalStats;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Container>
          <h1>Please leave feedback</h1>

          <FeedbackOptions
            onGod={this.btnGoodClick}
            onNeutral={this.btnNeutralClick}
            onBad={this.btnBadClick}
          />

          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Container>
      </>
    );
  }
}
