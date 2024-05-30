import { useState } from "react";
import List from "./list";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today </h3>
        <List people={people} />
      </section>
      <button
        type="button"
        className="btn btn-block"
        onClick={() => {
          setPeople([]);
        }}
      >
        clear all
      </button>
    </main>
  );
}
export default App;
