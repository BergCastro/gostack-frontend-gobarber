import Raectotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Raectotron.configure().connect();

  tron.clear();

  console.tron = tron;
}
