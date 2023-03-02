import { useLoaderData } from "react-router-dom";
import { Carousel } from "../../components/Carousel";
import { Collapse} from "../../components/Collapse";
import { Tag } from "../../components/Tag";
import { Location } from "../../_models/location";
import "./style.scss";


export function LocationPage() {
	const logement: Location = useLoaderData() as Location
	return (
		<>
			<div className="location">

				<Carousel pictures={logement.pictures}/>

				<div className="location_infos">
					<div className="location_infos_left">
						<h1 className="location_infos_left_title">{logement.title}</h1>
						<h2 className="location_infos_left_location">{logement.location}</h2>
						<Tag/>
					</div>

					<div className="location_infos_right">
						<div className="location_infos_right_host">
							<p className="location_infos_right_name">{logement.host.name}</p>
							<img src={logement.host.picture} alt="" className="location_infos_right_picture" />
						</div>
						<div className="location_infos_right_rating">
							{logement.rating}
						</div>
					</div>
				</div>

				<div className="location_details">
					<Collapse title="Description"> {logement.description}</Collapse>
					<Collapse title="Equipements"> <ul>{logement.equipments.map(equipment => (<li>{equipment}</li>))}</ul></Collapse>
				</div>
			</div>
		</>
	)
};

export async function loader({ params }:{params:{logementId:string}}) {
	const logements: Location[] = (
		await import("../../assets/logements.json")
	).default as Location[]
	return logements.find(logement => params.logementId === logement.id)
}