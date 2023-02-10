import { useLoaderData } from "react-router-dom";


export function LocationPage() {
	const logements= useLoaderData()
	console.log(logements)
	return (
		<>
            Appartement
		</>
	)
};

export async function loader(){
	return(
		await import("../../assets/logements.json")
	).default
}