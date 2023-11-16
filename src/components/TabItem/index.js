// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsEach, activeTabChange} = props
  const {tabId, displayText} = tabsEach
  const tabChange = () => {
    activeTabChange(tabId)
  }
  return (
    <li>
      <button type="button" onClick={tabChange} className="tabPara">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
