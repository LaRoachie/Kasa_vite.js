import { useLoaderData } from "react-router-dom";
import { Location } from "../../_models/location";


export function LocationPage() {
	const logement:Location = useLoaderData() as Location
	return (
		<>
            <p>{logement.title}</p>
		</>
	)
};

export async function loader({params}){
	const logements: Location[]=(
		await import("../../assets/logements.json")
	).default as Location[]
	return logements.find(logement => params.logementId === logement.id)
}