import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Garden from './Components/Garden/Garden';
import PlantDetails from './Components/PlantDetails/PlantDetails';
import SignUp from './Components/Forms/SignUp';
import FindPage from './Components/Find/Find';


const App = () => {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/garden" element={<Garden />} />
      <Route path="/plant/:id" element={<PlantDetails />} />
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/find' element={<FindPage/>} />
    </Routes>
  </Router>
  )
}

export default App