import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Loader from './components/loader/Loader';

const LazyLayout = React.lazy(() => import("./pages/layout/Layout"));
const LazyHome = React.lazy(() => import('./pages/home/Home'));
const LazyCategory = React.lazy(() => import("./pages/category/Category"));
const LazyOrder = React.lazy(() => import("./pages/order/Order"));
const LazyAccount = React.lazy(() => import("./pages/account/Account"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Route>

        <Route
          path="/home"
          element={
            <React.Suspense
              fallback={
                <div
                  className="grid place-content-center w-screen h-screen"
                  style={{ backgroundColor: "#78C38C" }}
                >
                  <div>
                    <Loader backgroundColor="#78C38C" color="white" />
                  </div>
                </div>
              }
            >
              <LazyLayout />
            </React.Suspense>
          }
        >
          <Route path="" element={<LazyHome />}></Route>
          <Route path="order" element={<LazyOrder />}></Route>
          <Route path="category" element={<LazyCategory />}></Route>
          <Route path="account" element={<LazyAccount />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
