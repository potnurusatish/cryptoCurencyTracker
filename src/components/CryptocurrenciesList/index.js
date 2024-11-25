import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = props => {
  const {cryptoList} = props
  console.log(cryptoList)

  return (
    <div className="cryptocurrencies-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        className="cryptocurrency-img"
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
      />
      <div className="cryptocurrencies-list-container">
        <div className="list-header">
          <p className="list-coin-type-heading">Coin Type</p>
          <div className="usd-and-euro-values-container">
            <p className="list-coin-value-heading">USD</p>
            <p className="list-coin-value-heading">EURO</p>
          </div>
        </div>
        <ul className="cryptocurrencies-list">
          {cryptoList.map(eachItem => (
            <CryptocurrencyItem coinDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CryptocurrenciesList
