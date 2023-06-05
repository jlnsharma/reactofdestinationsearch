import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="main">
        <h1>Destination Search</h1>
        <div className="searchCont">
          <input
            className="inputBox"
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="searchImg"
            alt="search icon"
          />
        </div>
        <ul className="list-Cont">
          {searchResults.map(eachUser => (
            <DestinationItem key={eachUser.id} userDetails={eachUser} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
