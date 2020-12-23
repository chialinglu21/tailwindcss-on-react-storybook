
import React from 'react';
import './grid-page.scss';

export const GridPage = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
            <div className="grid-box"></div>
        </div>
    );
};