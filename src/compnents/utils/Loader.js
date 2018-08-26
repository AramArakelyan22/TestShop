import React from 'react';
import Loader from 'react-loader-spinner';

export default class ReactLoader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div style={{display: 'flex', alignItems: 'center', width: '100%', height: '100vh', justifyContent: 'center'}}>
        <div>
          <Loader
            type="Oval"
            color="#00BFFF"
            height="100"
            width="100"
          />
          <p>Loading...</p>
        </div>
      </div>

    );
  }
}