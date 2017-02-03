import React from 'react';

class Preview extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: false
    }
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{fontSize: '36px'}}>¯\_(ツ)_/¯</div>
        <div style={{marginTop: '15px'}}>
          <button onClick={
            (event) => {
              this.props.action('¯\\_(ツ)_/¯');
              this.setState({disabled: true});
            }
          } style={{
            background: 'transparent',
            border: '1px solid #fff',
            color: '#fff',
            borderRadius: '3px',
            fontSize: '20px',
            padding: '7px 20px 8px'
          }} disabled={this.state.disabled}>
            {this.state.disabled ? 'copied!' : 'copy to clipboard'}
          </button>
        </div>
      </div>
    );
  }
}

export default (action) => () => <Preview action={action}/>;