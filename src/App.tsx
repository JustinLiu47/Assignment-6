import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import MoviesView from "./views/MoviesView";
import DetailView from "./views/DetailView";
import { AuthProvider } from './AuthContext';
import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/movies" element={<MoviesView />}>
            <Route path=":id" element={<DetailView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;