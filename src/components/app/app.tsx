import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../../pages/main';
import { ProtectedRoute } from '../protected-route/protected-route';
import { Login } from '../../pages/login';

export const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};
