import { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { onGod, onNeutral, onBad } = this.props;
    return (
      <div>
        <button type="button" onClick={onGod}>
          Good
        </button>
        <button type="button" onClick={onNeutral}>
          Neutral
        </button>
        <button type="button" onClick={onBad}>
          Bad
        </button>
      </div>
    );
  }
}
