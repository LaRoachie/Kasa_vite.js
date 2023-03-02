import { Banner } from "../../components/Banner";
import { Cards } from "../../components/Cards"
import { Link, useLoaderData } from "react-router-dom";
import './style.scss';
import { Location } from "../../_models/location";


export function HomePage() {
	const logements: Location[] = useLoaderData() as Location[]
	console.log(logements)
	return (
		<>
			<Banner src='src/assets/home_bkg.png' title='Chez vous, partout et ailleurs'/>
			<div className="location-container">
				{logements.map(logement => <Link to={`/location/${logement.id}`}><Cards location={logement}/></Link>)}
			</div>
		</>
	)
};

export async function loader() {
	return (
		await import("../../assets/logements.json")
	).default
}