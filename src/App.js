import React from "react";
import Container from 'react-bootstrap/Container';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./pages/book/Detail";
import Home from "./pages/book/Home";
import SaveForm from "./pages/book/SaveForm";
import UpdateForm from "./pages/book/UpdateForm";
import JoinForm from "./pages/user/JoinForm";
import LogOutForm from "./pages/user/LogOutForm";
import LoginForm from "./pages/user/LoginForm";
import MovieList from "./pages/MovieList";

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/home" element={<MovieList/>}/>
          <Route path="/saveForm" element={<SaveForm/>}/>
          <Route path="/book/:id" element={<Detail/>}/>
          <Route path="/joinForm" element={<JoinForm/>}/>
          <Route path="/logOutForm" element={<LogOutForm/>}/>
          <Route path="/updateForm/:id" element={<UpdateForm/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
