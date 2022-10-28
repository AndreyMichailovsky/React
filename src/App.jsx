import { Message } from './components/Message';

export const App = () => {
  const name = 'Andrey';
  return (
    <div className="App">
      <Message name={name} />
    </div>
  );
}


