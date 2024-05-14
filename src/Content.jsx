import Hero from './Hero';
import Industry3 from './Industry3';
import Industry4 from './Industry4';
import Comparison from './Comparison';
import Examples from './Examples';
import ContactUs from './ContactUs';
import { Routes, Route } from 'react-router-dom';
import './index.css';

export default function Content() {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/industry-3' element={<Industry3 />} />
        <Route path='industry-4' element={<Industry4 />} />
        <Route path='/comparison' element={<Comparison />} />
        <Route path='/examples' element={<Examples />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </main>
  );
}
