import { Outlet } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import "./style.scss"

export function DefaultLayout() {
    return (
        <>
            <div className="container">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}