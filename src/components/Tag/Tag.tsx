import './style.scss';
import { useLoaderData } from "react-router-dom";
import { Location } from '../../_models/location';

export function Tag() {
    const logement: Location = useLoaderData() as Location
    return (
        <div className="tag">
            {logement.tags.map(tag => (
                <span>{tag}</span>
            ))}
        </div>
    );
}