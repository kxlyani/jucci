import { products } from '../data/products'
import ProductCard from './ProductCard'
import './Market.css'

function Market() {
  return (
    <section className="market">
      <h2>Market Selection</h2>

      <div className="market-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Market
