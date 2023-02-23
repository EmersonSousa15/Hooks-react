import './App.css';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';
import UseContext from './components/UseContext';
import UseCallback from './components/useCallback';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseLayoutEffect from './UseLayoutEffect';

function App() {
  return (
    <section>
      <UseState/>
      <UseEffect/>
      <UseContext/>
      <UseCallback/>
      <UseMemo/>
      <UseRef/>
      <UseLayoutEffect/>
    </section>
  );
}

export default App;
