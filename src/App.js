import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Container from "./Pages/Container/mainContainer"

function App() {
  return (

    <>
      <ToastContainer />
      <div data-theme="light">
        <Container />
      </div>
    </>

  );
}

export default App;
