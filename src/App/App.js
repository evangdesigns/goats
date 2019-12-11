import React from 'react';
import './App.scss';
import goatData from '../helpers/data/goatData';
import GoatCoral from '../components/goatCoral/goatCoral';
import AvailableGoats from '../components/availableGoats/goatsAvailable';

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  freeGoat = (goatId) => {
    goatData.freeAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  useGoat = (goatId) => {
    goatData.useAGoat(goatId);
    const goats = goatData.getGoats();
    this.setState({ goats });
  }

  render() {
    return (
      <div className="App">
          <AvailableGoats goats={this.state.goats} />
          <button className="btn btn-danger">Bootstrap Button</button>
          <GoatCoral goats={this.state.goats} freeGoat={this.freeGoat} useGoat={this.useGoat} />
      </div>
    );
  }
}

export default App;
