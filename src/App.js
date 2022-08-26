import './App.css';
import 'core-js/actual';
import Header from './assets/Header';
import Destacado from './assets/Destacado';
import Cupones from './assets/Cupones';
import PromoApp from './assets/PromoApp';
import Footer from './assets/Footer';


function App() {

  return(
    <div className='container-fluid fondo_amarillo'>
      <Header />
      <hr />
      <Destacado />
      <Cupones />
      <PromoApp />
      <Footer />
    </div>
  );
}

export default App;
