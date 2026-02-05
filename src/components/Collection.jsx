import './Collection.css'

function Collection() {
  return (
    <section className="collection">
      <div className="collection-left">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
          alt="Collection"
        />
      </div>

      <div className="collection-right">
        <h2>The Collection</h2>
        <p>
          A refined balance of heritage and modernity. Designed for those
          who define luxury on their own terms.
        </p>
        <span className="collection-link">View All</span>
      </div>
    </section>
  )
}

export default Collection
