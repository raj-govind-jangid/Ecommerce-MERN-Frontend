import RouterList from './router/routerList';
import { BrowserRouter } from 'react-router-dom';
import './axios';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <BrowserRouter>
      <RouterList></RouterList>
    </BrowserRouter>
  );
}

export default App;
