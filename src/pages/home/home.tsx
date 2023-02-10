import { Banner } from "../../components/Banner";
import { Cards } from "../../components/Cards"
import { useLoaderData } from "react-router-dom";


export function HomePage() {
	const logements= useLoaderData()
	console.log(logements)
	return (
		<>
			<Banner />
			<Cards />
		</>
	)
};

export async function loader(){
	return(
		await import("../../assets/logements.json")
	).default
}