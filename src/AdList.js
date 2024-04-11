// src/AdList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAd } from './redux/actions';

function AdList() {
    const ads = useSelector((state) => state.ads);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteAd(id));
    };

    return (
        <ul>
            {ads.map((ad) => (
                <li key={ad.id}>
                    {ad.text}
                    <button onClick={() => handleDelete(ad.id)}>удалить</button>
                </li>
            ))}
        </ul>
    );
}

export default AdList;
