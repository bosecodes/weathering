import React from 'react'

/*class Weather extends React.Component {
  render() {
    return(
      <div>
      { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
      { this.props.city && this.props.country && <p>Temperature: {this.props.temperature}</p> }
      { this.props.city && this.props.country && <p>Humidity: {this.props.humidity}</p> }
      { this.props.city && this.props.country && <p>Conditions: {this.props.description}</p> }
      { this.props.error === true && <p>{ this.props.error }</p> }
      </div>
    );
  }
}*/
//using stateless functions when we don't have states defined in a class
//as long as we don't need state, we can simply use the below functional approach

const Weather = (props) => {
  return(
    <div>
    { props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
    { props.city && props.country && <p>Temperature: {props.temperature}</p> }
    { props.city && props.country && <p>Humidity: {props.humidity}</p> }
    { props.city && props.country && <p>Conditions: {props.description}</p> }
    { props.error === true && <p>{ props.error }</p> }
    </div>
  );
}

export default Weather;
