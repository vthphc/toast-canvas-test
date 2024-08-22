import React from "react";
import FirstPage from "../ui/FirstPage";
import SecondPage from "../ui/SecondPage";
import ThirdPage from "../ui/ThirdPage";
import FifthPage from "../ui/FifthPage";
import SixthPage from "../ui/SixthPage";
import SeventhPage from "../ui/SeventhPage";
import ProductList from "../ui/ProductList";

export default function MainPage() {
    return (
        <div className="pb-72">
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <ProductList />
            <FifthPage />
            <SixthPage />
            <SeventhPage />
        </div>
    );
}
