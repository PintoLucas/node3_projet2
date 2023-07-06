import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./Login/index";
import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListFurnitures from './ListFurnitures';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Login />}>
              </Route>
              <Route path="/listfurnitures" element={<ListFurnitures />}>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);