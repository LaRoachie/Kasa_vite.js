import { Link, useLoaderData } from "react-router-dom";

import { Banner } from "../../components/Banner";
import { Cards } from "../../components/Cards"
import { Location } from "../../_models/location";

import './style.scss';

export function HomePage() {
	const logements: Location[] = useLoaderData() as Location[]
	console.log(logements)
	return (
		<>
			<Banner src='src/assets/home_bkg.png' title='Chez vous, partout et ailleurs' />
			<div className="location-container">
				{logements.map(logement => <Link to={`/location/${logement.id}`}><Cards location={logement} /></Link>)}
			</div>
		</>
	)
};

export async function loader() {
	return (
		await import("../../assets/logements.json")
	).default
}