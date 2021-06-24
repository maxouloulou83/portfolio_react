import React from 'react';

const GetCard = (props) => {
    const { img , link } = props;

    return (
        <div className="mx-2">
            <a target="_blank"
                href={link}
            >
                <img src={img} className="rounded-lg" alt=""/>
            </a>
        </div>
    );
}

export default GetCard;