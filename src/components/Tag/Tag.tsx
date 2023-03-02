import { useLoaderData } from "react-router-dom";

import { Location } from '../../_models/location';

import './style.scss';

export function Tag() {
    const logement: Location = useLoaderData() as Location
    return (
        <div className="tag">
            {logement.tags.map(tag => (
                <span key={tag}>{tag}</span>
            ))}
        </div>
    );
}