import { createBrowserRouter } from "react-router-dom";
import Booked from "../../Pages/Booked/Booked";
import Home from "../../Pages/Home/Home";
import TopRates from "../../Pages/TopRates/TopRates";
import Main from "./Main";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element:<Home/>
			},
			{
				path: "/top",
				element:<TopRates/>
			},
			{
				path: "/booked",
				element:<Booked/>
			}
		]
	}
])
export default routes;