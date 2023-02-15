import './App.css';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';
import UseContext from './components/UseContext';
import UseCallback from './components/useCallback';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';

function App() {
  return (
    <section>
      <UseState/>
      <UseEffect/>
      <UseContext/>
      <UseCallback/>
      <UseMemo/>
      <UseRef/>
    </section>
  );
}

export default App;
