import React from 'react'

/*class Form extends React.Component {
  render() {
    return(
      <div>
        <form onSubmit = {this.props.getWeather}>
          <input type = "text" id = "city" placeholder = "City..." />
          <input type = "text" id = "country" placeholder = "Country..." />
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
}
*/
//using stateless functions when we don't have states defined in a class
//as long as we don't need state, we can simply use the below functional approach

const Form = (props) => {
  return(
    <div>
      <form onSubmit = {props.getWeather}>
        <input type = "text" id = "city" placeholder = "City..." />
        <input type = "text" id = "country" placeholder = "Country..." />
        <button>Get Weather</button>
      </form>
    </div>
  );
}


export default Form;
