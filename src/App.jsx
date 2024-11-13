import './App.css'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';



export default function App() {
  return (
    <div>
        <Navbar />
        {/* <Sidebar />  */}
        <SearchBar />
        <VideoList />
    </div>
  );
}


