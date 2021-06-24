import React from 'react'
import Index from "../components/Index";
import Header from "../components/Header";

export default function Hero() {
    return (
        <>
            <div className="h-screen">
                <Header />
                <Index />
            </div>
        </>
    )
}