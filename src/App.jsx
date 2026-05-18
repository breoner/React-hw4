import data from './data.json';
import Statistics from './Statistics';

function App() {
  return (
    <>
      <Statistics title="Upload stats" stats={data} />
    </>
  );
}

export default App;