import React from 'react'

/*class Titles extends React.Component{
  render() {
    return(
      <div>
        <h1>Weather Finder</h1>
        <p>Find out temperature conditions and more!</p>
      </div>
    );
  }
}
*/
//using stateless functions when we don't have states defined in a class
//as long as we don't need state, we can simply use the below functional approach

const Titles = () => {
  return(
    <div>
      <h1>Weather Finder</h1>
      <p>Find out temperature conditions and more!</p>
    </div>
  );
}

export default Titles;
