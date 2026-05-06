import type { Beer } from "../data/beers";

export function BeerCard({ beer }: { beer: Beer }) {
  return (
    <article className="beer-card">
      <h3>{beer.name}</h3>
      <div className="beer-meta">
        <p className="beer-brewery">{beer.brewery}</p>
        <p className={`beer-style${beer.style ? "" : " is-empty"}`}>
          {beer.style || "Sem estilo"}
        </p>
      </div>
      <div className="beer-stats">
        <span>IBU {beer.ibu}</span>
        <span>ABV {beer.abv}</span>
      </div>
      <div className="beer-prices">
        {Object.entries(beer.prices).map(([size, price]) => (
          <div key={size}>
            <span>{size}</span>
            <strong>{price}</strong>
          </div>
        ))}
      </div>
    </article>
  );
}
