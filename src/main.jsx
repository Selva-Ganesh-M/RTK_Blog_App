import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./app/store";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchPosts } from "./features/posts/postSlice";
import { fetchUsers } from "./features/users/userSlice";

// DATA FETCHING
store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

// APP RENDERING
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </Provider>
);
