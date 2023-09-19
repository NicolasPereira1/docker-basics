import useFetch from "../hooks/useFetch";

export default function DataList ({target}) {
  const URL = `http://localhost:8080/${target}`;
  const [products] = useFetch(URL);
  return products.length > 0 ?
            <ul> 
              { products.map( 
                  product => <li>{product.name} / {product.price} €</li>
                ) 
              } 
            </ul> : 
            <p>No data.</p>
}
