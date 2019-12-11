import React from 'react';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeGoat: PropTypes.func,
  }

  freeGoatEvent = (e) => {
    const { freeGoat, goat } = this.props;
    e.preventDefault();
    freeGoat(goat.id);
  }

  useGoatEvent = (e) => {
    const { useGoat, goat } = this.props;
    e.preventDefault();
    useGoat(goat.id);
  }

  render() {
    const { goat } = this.props;

    return (
      <div className="card col-4">
        <img className="card-img-top" src={goat.imgUrl} alt="goat" />
        <div className="card-body">
          <h5 className="card-title">{goat.name}</h5>
          <p className="card-text">{goat.age}</p>
          <p className="card-text">{goat.description}</p>
          {
            (goat.isBusy) ? <div className="btn btn-primary" onClick={this.freeGoatEvent} >FREE ME</div>
              : <div className="btn btn-outline-primary" onClick={this.useGoatEvent} >USE ME</div>
         }
        </div>
      </div>
    );
  }
}

export default Goat;
