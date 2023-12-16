import './App.css';
import Contact from './components/Contact';
import ContactManage from './components/ContactManage';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='content'>
          <div className='row'>
            <Contacts/>
            {/* <ContactManage/> */}
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
