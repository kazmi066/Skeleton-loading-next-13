import Image from "next/image";

export const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res.json());
    }, 2110);
  });
}

const priceBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "10px 0"
}

export default async function Products() {
  const data = await getData();

  return (
    <main>
      <div className="products-grid">
        {
          data.products.map((p) => (
            <article key={p.id} className="card">
              <div className="card-img">
                <Image src={p.thumbnail} alt="product image" fill />
              </div>
              <div className="card-text">
                <h2 className="card-title">{p.title}</h2>
                <h4 className="card-brand">By <span className="brand-red">{p.brand}</span></h4>
                <p className="card-description">{p.description}</p>
                <div style={priceBar}>
                  <p>${p.price}</p>
                  <p><b>Rating:</b> {p.rating}</p>
                </div>
              </div>
            </article>
          ))
        }
      </div>
    </main>
  )
}
