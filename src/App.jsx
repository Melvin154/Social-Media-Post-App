import Header from "./components/Header";
import Nav from "./components/Nav";


import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import Post from "./components/Post";
import Missing from "./components/Missing";
import PostLayout from "./layouts/PostLayout";

import { Link } from "react-router-dom";
import { useState } from "react";

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
    title:"Final Post",
    datetime:"Jan 3, 2024 01:12:45 AM",
    body:"Got my first onsite offer mail from my client..."
  }
])




const [search,setSearch]=useState('')
const [searcResults,setSearchResults]=useState([]);


  return (
    <div className="App">
      <Header title="Instagram"/>
      <Nav search={search} setSearch={setSearch}/>
      <Home posts={posts}/>

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
