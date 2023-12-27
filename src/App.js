import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import Container from "./Pages/Container/mainContainer"
// import Layout from './layout/default'
import Layout from './layout/default'


function App() {
  return (

    <>
      <ToastContainer />
      <div data-theme="light">
        <Layout/>
      </div>
    </>

  );
}

export default App;
