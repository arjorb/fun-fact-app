import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className='flex justify-center mt-20'>
      <div className='w-[550px] bg-white '>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
