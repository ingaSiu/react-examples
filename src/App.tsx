import Example from './examples/MemoAndCallbackExample';
import Examples from './examples/ExamplesTable';
import HookExample from './examples/hooks/customHookExample';
import RefExample from './examples/refsExample';
import ToggleExample from './examples/ToggleExample';

const App = () => {
  return (
    <div>
      {/* <h1>Hello</h1>
      <RefExample />
      <Examples /> */}
      <HookExample />
      {/* <ToggleExample />
      <Example /> */}
    </div>
  );
};

export default App;

