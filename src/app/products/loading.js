export default function Loading() {
  return (
    <div className="products-grid">
      {
        [...new Array(10)].map((p, index) => (
          <article key={index} className="skeleton-card">
            <div className="skeleton skeleton-card-img">
            </div>
            <div className="skeleton-card-text">
              <h2 className="skeleton skeleton-card-title"></h2>
              <h4 className="skeleton skeleton-card-brand"></h4>
              <p className="skeleton skeleton-card-description"></p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "10px 0" }}>
                <p className="skeleton skeleton-card-price"></p>
                <p className="skeleton skeleton-card-rating"></p>
              </div>
            </div>
          </article>
        ))
      }
    </div>
  )
}