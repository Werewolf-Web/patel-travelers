import './App.css'
import Header from './component/Header/Header'
import Memories from './component/Memories/Memories'
import Nav from './component/Nav/Nav'


function App() {


  return (
    <div className='main'>
       
      <Nav/> 
      <Header/>
      <Memories/>
    </div>
  )
}

export default App
