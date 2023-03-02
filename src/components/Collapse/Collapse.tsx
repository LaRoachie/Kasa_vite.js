import { useState, ReactNode } from "react";

import Chevron from "/src/assets/down.svg";

import './style.scss'

interface CollapseProps {
    title: string,
    children?: ReactNode
}

export function Collapse({ title, children }: CollapseProps) {
    const [toggle, setToggle] = useState(false);

    const toggleState = () => {
        setToggle(!toggle);
    };

    return (
        <div className="collapse">
            <div onClick={toggleState} className="collapse_visible">
                <h3>{title}</h3>
                <img className={toggle ? "chevron rotated" : "chevron"} src={Chevron} alt="chevron" />
            </div>
            <div className={toggle ? "collapse_toggle animated" : "collapse_toggle"}>
                {children}
            </div>
        </div>
    );
}