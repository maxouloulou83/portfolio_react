import React from 'react';

const GetCard = (props) => {
    const { img , link } = props;

    return (
        <div className="mx-2 flex">
            <div className="w-full py-2 px-2 items-center justify-center shadow-2xl shadow-inner rounded-3xl bg-opacity-60">
                <a  target="_blank"
                    href={link}
                    className="w-6/8 ">
                    <img src={img} className="rounded-lg" alt=""/>
                </a>
            </div>
        </div>
    );
}

export default GetCard;