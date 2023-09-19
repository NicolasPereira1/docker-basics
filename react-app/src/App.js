import DataList from "./components/DataList";

function App() {
  return (
    <main>
      <h1>React app:</h1>
      
      <h3>Product list: </h3>
      <DataList target='products'/>

      <h3>Items list: </h3>
      <DataList target='items'/>
      
    </main>
  );
}

export default App;
