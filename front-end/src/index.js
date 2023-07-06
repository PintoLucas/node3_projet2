import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./Login/index";
import Menu from './Menu';
import './styles/style.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListFurnitures from './ListFurnitures';
import CreateFurniture from './AddFurniture';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Menu />
          <Routes>
              <Route path="/" element={<Login />}>
              </Route>
              <Route path="/listfurnitures" element={<ListFurnitures />}>
              </Route>
              <Route path="/addfurniture" element={<CreateFurniture />}>
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);