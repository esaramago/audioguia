﻿import {NavLink} from 'react-router-dom';
import './ListItem.css';
import toLeadingZero from '@helpers/toLeadingZero';
import toKebabCase from '@helpers/toKebabCase';

function ListItem(props) {

    const number = toLeadingZero(props.item.number, 2);
    const guidePage = toKebabCase(props.item.description);

    return (
        <li className="c-list-item">
            <div className="c-list-item__number">{number}</div>
            <div className="c-list-item__description">{props.item.description}</div>
            <div className="c-list-item__icon">
                <NavLink className="" to={`/guide/${guidePage}-${props.item.audioId}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.25" height="29.25" viewBox="0 0 29.25 29.25">
                        <path d="M18,3.375A14.625,14.625,0,1,0,32.625,18,14.623,14.623,0,0,0,18,3.375Zm5.892,14.9L14.245,24.11a.313.313,0,0,1-.471-.274V12.164a.312.312,0,0,1,.471-.274l9.647,5.836A.322.322,0,0,1,23.892,18.274Z" transform="translate(-3.375 -3.375)" fill="#00dbaf" />
                    </svg>
                </NavLink>
            </div>
        </li>
    )
}

export default ListItem;