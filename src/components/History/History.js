import {Component} from 'react'
import HistoryItem from '../HistoryItem/HistoryItem'

import './History.css'

class History extends Component {
  state = {searchInput: '', historyList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryElement = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachHistory => eachHistory.id !== id,
    )

    this.setState({historyList: updatedHistoryList})
  }

  render() {
    const filteredHistoryList = this.filterHistoryList()
    const {searchInput} = this.state
    return (
      <div className="background-container">
        <div className="header-container">
          <img
            className="history-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />

          <div className="input-container">
            <img
              alt="search"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            />

            <input
              value={searchInput}
              className="search-input"
              type="search"
              placeholder="Search history"
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>

        {filteredHistoryList.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="History-container">
            {filteredHistoryList.map(each => (
              <HistoryItem
                HistoryDetails={each}
                key={each.id}
                deleteHistoryElement={this.deleteHistoryElement}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default History
