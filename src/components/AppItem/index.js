// Write your code here
import './index.css'

const AppItem = props => {
  const {appsEach} = props
  const {appName, imageUrl} = appsEach
  return (
    <li className="list">
      <img alt={appName} src={imageUrl} className="app-image" />
      <p className="app-para">{appName}</p>
    </li>
  )
}

export default AppItem
