import { useLoaderData } from "react-router-dom";

import { Banner } from "../../components/Banner";
import { Collapse } from "../../components/Collapse";
import { About } from "../../_models/about";

import "./style.scss"

export function AboutPage() {
    const about: About = useLoaderData() as About
    console.log(about)
    return (
        <>
            <Banner src='src/assets/about_bkg.png' title="" />
            <Collapse title="Fiabilité">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos equipes.</Collapse>
            <Collapse title="Respect">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.</Collapse>
            <Collapse title="Service">Nos équipes se tiennent à votre disposition pour vous fournir une excperience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</Collapse>
            <Collapse title="Responsabilité">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité etablis par nos services. En laissant une note aussi à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous orgnisons également des ateliers sur la sécurité domestique pour nos hôtes.</Collapse>
        </>
    )
}

export async function loader() {
	return (
		await import("../../assets/about.json")
	).default
}