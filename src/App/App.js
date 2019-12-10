import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/goatCoral/goatCoral';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
          <button className="btn btn-danger">Bootstrap Button</button>
          <GoatCoral goats={this.state.goats} />
      </div>
    );
  }
}

export default App;
