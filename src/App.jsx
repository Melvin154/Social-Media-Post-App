import Header from "./components/Header";
import Nav from "./components/Nav";


import Footer from "./components/Footer";
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import Post from "./components/Post";
import Missing from "./components/Missing";
import PostLayout from "./layouts/PostLayout";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import format from "date-fns/format";

function App() {

const [posts,setPosts]=useState([
  {
    id:1,
    title:"First Post",
    datetime:"Sept 18, 2023 11:10:35 AM",
    body:"Today I got a new Job offer from Infosys...."
  },
  {
    id:1,
    title:"Second Post",
    datetime:"Sept 25, 2023 09:10:15 AM",
    body:"Day 1 at my dream Company"
  },
  {
    id:3,
    title:"Third Post",
    datetime:"Oct 07, 2023 12:55:25 PM",
    body:"Thanks giving prayer to god, for getting my job in my dream company."
  },
  {
    id:4,
    title:"Fourth Post",
    datetime:"Jan 3, 2024 01:12:45 AM",
    body:"Got my first onsite offer mail from my client..."
  }
])




const [search,setSearch]=useState('')
const [searcResults,setSearchResults]=useState([]);
const [postTitle,setPostTitle]=useState('');
const [postBody,setPostBody]=useState('');
const navigate=useNavigate()


useEffect(()=>{
  const filteredResults=posts.filter((post)=>
  ((post.body).toLowerCase()).includes(search.toLowerCase())||((post.title).toLowerCase()).includes(search.toLowerCase()));

  setSearchResults(filteredResults.reverse());
},[posts,search]);
  
  


const handleSubmit = async (e) => {
  e.preventDefault();
  const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  const datetime = format(new Date(), 'MMMM dd, yyyy pp');
  const newPost = { id, title: postTitle, datetime, body: postBody };

      const allPosts = [...posts, newPost];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');

      
  navigate("/")
  } 


const handleDelete=(id)=>{
const postsList=posts.filter(post=>post.id !==id);
setPosts(postsList)
navigate('/')
}





  return (
    <div className="App">
      <Header title="Instagram"/>
      <Nav search={search} setSearch={setSearch}/>
     
      




<Routes>
  <Route path="/" element={ <Home posts={searcResults}/>}/>
  <Route path="/about" element={<About/>}/>



  {/*Nested Routin*/}
  <Route path="post">
  <Route index element={<NewPost 
        handleSubmit={handleSubmit}
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postBody={postBody}
        setPostBody={setPostBody}
      />
}/>
<Route path=":id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
</Route>


<Route path="*" element={<Missing/>}/>

</Routes>




















      {/*

      //Main Links
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/postpage">PostPage</Link>
          </li>
        </ul>
      </nav>


//Routing Cocepts

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />

        //Normal Ways to Routing with same name
        //
        <Route path="/postpage" element={<PostPage />} />
        <Route path="/postpage/:id" element={<Post />} />
        <Route path="/postpage/newpost" element={<NewPost />} />
  

        //Nested Routing 
        //Nested Routing Means Removing the main name
        <Route path="/postpage" element={<PostLayout/>}>
          <Route index element={<PostPage />} />
          <Route path=":id" element={<Post />} />
          <Route path="newpost" element={<NewPost />} />
        </Route>

        //Missing Path Ex:404 Not Found 
        <Route path="*" element={<h1>404 Error Not Found!!</h1>} />
      </Routes>
 */}
    </div>
  );
}

export default App;
