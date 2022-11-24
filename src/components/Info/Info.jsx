//Feather
import { GitHub, Moon, Sun } from 'react-feather';

//Custom hooks
import useTheme from "../../hooks/useTheme";

// Styles
import "./info.scss";


const Info = () => {

	const {theme, setTheme} = useTheme();

	const handleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}

    return (
        <div className="info">
			<a className="info__item" href="#">
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