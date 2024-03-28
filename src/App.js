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
import BookSeat from "./pages/BookSeat";
import SelectHall from "./pages/SelectHall";
import SelectHall2 from "./pages/SelectHall2";
import SelectHall3 from "./pages/SelectHall3";
import Book from "./pages/Book";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<MovieList />} />
          <Route path="/BookSeat" element={<BookSeat />} />
          <Route path="/SelectHall" element={<SelectHall />} />
          <Route path="/SelectHall2" element={<SelectHall2 />} />
          <Route path="/SelectHall3" element={<SelectHall3 />} />
          <Route path="/Book" element={<Book />}/>
          <Route path="/saveForm" element={<SaveForm />} />
          <Route path="/book/:id" element={<Detail />} />
          <Route path="/joinForm" element={<JoinForm />} />
          <Route path="/logOutForm" element={<LogOutForm />} />
          <Route path="/updateForm/:id" element={<UpdateForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
