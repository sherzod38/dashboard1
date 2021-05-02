
import Tickets from './pages/Tickets/Tickets'
import Sidebar from './containers/Sidebar/Sidebar'

import './assets/styles/main.scss'



function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Tickets/>
    </div>
  );
}

export default App;
