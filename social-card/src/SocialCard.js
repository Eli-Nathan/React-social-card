import React, {Component} from 'react';
import './SocialCard.css';
import heart from './images/heart.svg';

class SocialCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <div className="card__image">
          <img
            src={this.props.imagePath}
            alt="Image alt text"
          />
        </div>
        <div className="card__info">
          <h2>{this.props.title}</h2>
          <div className="interactions">
            <button className="interactions__icon interactions__icon--heart">
              <object
                className="heartObject"
                type="image/svg+xml"
                data={heart}
              />
            </button>
            <span className="interactions__amount interactions__amount--heart">

            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialCard;
