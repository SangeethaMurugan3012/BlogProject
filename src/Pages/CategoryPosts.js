import Post from "../Components/Post";
import { useEffect,useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function CategoryPosts() {
     const [posts,setPosts] =useState([]);
     const [category,setCategory] =useState(null);
     const {id} =useParams()

     const fetchPosts = async ()=> {
        const response = await axios.get(`https://blog-backend-0hsu.onrender.com/api/posts/category/${id}`)
        setPosts(response.data)
     }

     const fetchCategory = async ()=> {
        const response = await axios.get(`https://blog-backend-0hsu.onrender.com/Nameapi/categories/${id}`)
        setCategory(response.data)
     }

     useEffect(() => {
        fetchPosts();
        fetchCategory();
     },[])

     if(!category) {
        return <p>Loading...</p>
     }


    return <>

    <main>
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="mb-4">{category.name}</h1>

                    {
                        posts.length > 0 ? posts.map((post) => <Post post={post} />) : <h4>No posts available</h4>
                    }
                 

                </div>

               
            </div>
        </div>
    </main>

    </>
}