// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isMode: true}

  onMode = () => {
    this.setState(prevState => ({isMode: !prevState.isMode}))
  }

  render() {
    const {isMode} = this.state

    const modeClassName = isMode ? 'dark-mode' : 'light-mode'
    const getButtonText = isMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="container">
        <div className={`box ${modeClassName}`}>
          <h1 className="heading">Click to change Mode</h1>
          <button type="button" className="mode-button" onClick={this.onMode}>
            {getButtonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
