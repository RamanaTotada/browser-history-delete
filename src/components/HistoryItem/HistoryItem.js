import './HistoryItem.css'

const HistoryItem = props => {
  const {HistoryDetails, deleteHistoryElement} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryDetails
  const onDeleteButton = () => {
    deleteHistoryElement(id)
  }
  return (
    <li className="history-element-container">
      <div className="each-history">
        <p className="time">{timeAccessed}</p>
        <img className="domain-image" alt="domain logo" src={logoUrl} />
        <p className="domain-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div className="delete-image">
        <button className="image-delete" onClick={onDeleteButton} type="button">
          <img
            className="delete-image-di"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
