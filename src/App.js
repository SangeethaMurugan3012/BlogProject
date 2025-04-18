// import logo from './logo.svg';
// import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import CategoryPosts from './Pages/CategoryPosts';
import PostDetail from './Pages/PoatDetail';
import PostList from './Pages/PostList';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <CategoryPosts/> */}
      {/* <Post/> */}
     {/* <PostList/> */}

     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<PostList/>}/>
        <Route path='/posts/:id' element={<PostDetail/>} />
       <Route path='/posts/category/:id' element={<CategoryPosts/>} />
      </Routes>
      <Footer/>
     </Router>
     
    </div>
  );
}


export default App;
