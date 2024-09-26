
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

//import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import Home from './Example/Home';
import About from './Example/About';
import Nav from './Nav/Nav';
import ListUser from './Users/ListUser';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DetailUser from './Users/DetailUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/todos" element={<ListTodo />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" exact element={<ListUser />} />
          <Route path="/user/:id" element={<DetailUser />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
