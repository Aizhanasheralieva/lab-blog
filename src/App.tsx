import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import Add from './containers/Add/Add.tsx';
import About from './containers/About/About.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';
import Toolbar from './components/Toolbar/Toolbar.tsx';

const App = () =>
  (
    <>
      <Toolbar/>
      <Routes>
        <Route path="/posts" element={<Home />} />
        <Route path="/new-post" element={<Add />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />}/>
      </Routes>
    </>
  );

export default App;
