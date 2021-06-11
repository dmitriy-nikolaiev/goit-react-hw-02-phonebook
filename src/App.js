import { Component } from 'react';

import './App.scss';

import { Section } from './components/Section';

class App extends Component {
  state = {
    good: 0,
  };

  // feedbackActionHandler = (option) => () => {
  //   this.setState({ [option]: this.state[option] + 1 });
  // };

  render() {
    return (
      <div className="App">
        <Section title="Phone book">
          <div>Data</div>
        </Section>
      </div>
    );
  }
}

export default App;
