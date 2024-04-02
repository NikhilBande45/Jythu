import react from 'react'
import Nav from './components/Navbar/Nav';
import Header from './components/Header/Header';
import Partners from './components/Partners/Partners';
import Testinomial from './components/Testinomial/Testinomial';
import Features from './components/Features/Features';
import Market from './components/Markets/Market';
import Banner from './components/Banner/Banner';
import Process from './components/Process/Process';
import Updates from './components/Updates/Updates';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Partners />
      <Testinomial />
      <Features />
      <Market />
      <Banner />
      <Process />
      <Updates />
      <Footer />
    </>
  );
}

export default App;
