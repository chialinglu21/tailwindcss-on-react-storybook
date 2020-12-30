import React,{ FC } from "react";
import './grid-page';

const _initGridClass: GridClass = {
    containerClass: 'grid-cols-6',
    box1Class: '',
    box2Class: '',
    box3Class: '',
    box4Class: '',
    box5Class: '',
    box6Class: '',
    box7Class: '',
    box8Class: ''
}

export type GridClass = {
    containerClass: string;
    box1Class: string;
    box2Class: string;
    box3Class: string;
    box4Class: string;
    box5Class: string;
    box6Class: string;
    box7Class: string;
    box8Class: string;
}

export const GridPlaygroundPage: FC<GridClass> = (gridClass: GridClass = _initGridClass) => (
    <div className={`grid gap-4 grid-container ${gridClass.containerClass}`}>
        <div className={`grid-box ${gridClass.box1Class}`}>1</div>
        <div className={`grid-box ${gridClass.box2Class}`}>2</div>
        <div className={`grid-box ${gridClass.box3Class}`}>3</div>
        <div className={`grid-box ${gridClass.box4Class}`}>4</div>
        <div className={`grid-box ${gridClass.box5Class}`}>5</div>
        <div className={`grid-box ${gridClass.box6Class}`}>6</div>
        <div className={`grid-box ${gridClass.box7Class}`}>7</div>
        <div className={`grid-box ${gridClass.box8Class}`}>8</div>
    </div>);