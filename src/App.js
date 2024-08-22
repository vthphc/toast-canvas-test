import "./App.css";

import React from "react";
import NavBar from "./ui/NavBar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import Footer from "./ui/Footer";

export default function App() {
    return (
        <div>
            <NavBar />
            <div className="bg-white container mx-auto max-w-[96rem]">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
