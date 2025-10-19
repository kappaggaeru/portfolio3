"use client"
import React from "react";
import Button from "../components/button";

export default function Work() {
    const [activeWork, setActiveWork] = React.useState(0);
    return (
        <div className="mt-16">
            <div className="text-gray-1200 mb-5 flex w-full items-center font-medium">Work</div>
            <div className="flex flex-row gap-3">
                <Button
                    text="All"
                    onClick={() => setActiveWork(0)}
                    isActive={activeWork == 0}
                />
                <Button
                    text="Writing"
                    onClick={() => setActiveWork(1)}
                    isActive={activeWork == 1}
                />
                <Button
                    text="Components"
                    onClick={() => setActiveWork(2)}
                    isActive={activeWork == 2}
                />
            </div>
        </div>
    )
}