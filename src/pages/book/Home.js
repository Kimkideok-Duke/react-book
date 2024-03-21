import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookItem from '../../components/BookItem';

const Home = () => {
    const [books,setBooks] = useState([]);
    
    // 최초실행 + 상태값 변경시
    useEffect(()=>{
        axios.get('/book').then((res)=>{
            setBooks(res.data);
        }).catch((error)=>{
            console.log('--------error------ : '+error);
        });
        
    },[]);

    return (
        <div>
            {books.map((book)=>(<BookItem key={book.id} book={book}/>))}
        </div>
    );
};

export default Home;