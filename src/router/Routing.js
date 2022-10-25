import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Navbar></Navbar>
                        <Home></Home>
                        <Footer></Footer>
                    </>
                }>
                </Route>
                <Route path="/service" element={<h1>Service space</h1>}>
                </Route>
            </Routes>
        </Router>
    );
}