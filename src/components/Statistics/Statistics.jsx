import { Component } from 'react';
import { Notification } from '../Notification/Notification';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <>
        <h2>Statistics</h2>
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>

            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
          </ul>
        )}
      </>
    );
  }
}
