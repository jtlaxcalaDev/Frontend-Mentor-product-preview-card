import './App.css'

import Cart from './assets/images/icon-cart.svg'

function App() {

  return (
    <div className="card-product">
      <img className='card-image' />
      <div className="product-details">
        <small className="product-type">PERFUME</small>
        <div className="product-title">Gabrielle Essence Eau De Parfum</div>
        <p className="product-description">
          A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="product-price">$149.99 <span className="product-oldprice">$169.99</span></div> 
        <br />
        <button className='product-add'> <img className='produc-add-icon' src={Cart} alt="" /> Add to Cart</button>
      </div>
    </div>
    
  )
}

export default App
