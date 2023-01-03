import AllPages from "./AllPages";
import { useState } from "react";
import HomePage from "./HomePage";

export default function routes(){
    const [showHome, setShowHome] = useState("false");
    return <>{showHome === "true" ? <HomePage /> : <AllPages />}</>;
}


