import { useState } from "react";


function Header({ title, logo }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    function handleClick() {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <header>
            <button onClick = {handleClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;