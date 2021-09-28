import "./App.css";
import SidebarModules from './components/SidebarModules';
import SingleImageUploadComponent from './components/SingleImageUploadComponent';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row"> 
          <SidebarModules />       
          <div className="col-sm p-0 min-vh-100">
          <SingleImageUploadComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
