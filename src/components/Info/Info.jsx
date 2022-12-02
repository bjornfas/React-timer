//Feather
import { GitHub, Moon, Sun } from 'react-feather';

import { useState } from 'react';

// Styles
import "./info.scss";


const Info = () => {

	const [theme, setTheme] = useState(localStorage.getItem("app-theme") || "light");

	document.documentElement.setAttribute("data-theme", theme);

	const handleTheme = () => {
        if (theme === "light") {
			setTheme("dark");
			localStorage.setItem("app-theme", "dark");
		} else {
			setTheme("light");
			localStorage.setItem("app-theme", "light");
		}
	}

    return (
        <div className="info">
			<a className="info__item" href="https://github.com/bjornfas/react-timer">
				<GitHub className="info__icon" size={30}/>
			</a>
			<div className="info__item" onClick={handleTheme}>
				{theme === "light" 
					? <Moon className="info__icon" size={30}/> 
					: <Sun className="info__icon" size={30}/>
				}
			</div>
		</div>
    )
}

export default Info;