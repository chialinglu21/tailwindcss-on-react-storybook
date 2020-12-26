
import React, {FC} from 'react';
import './grid-page.scss';

const _initGaps: GridGap = {
    defGap: 4,
    smGap: 1.5,
    mdGap: 4,
    lgGap: 5,
    xlGap: 10,
    xxlGap: 10
}

export type GridGap = {
    defGap: number;
    smGap: number;
    mdGap:number;
    lgGap:number;
    xlGap: number;
    xxlGap: number;
}

export const GridPage: FC<GridGap> = (gaps: GridGap = _initGaps) => {
    const DEFAULT_GAP = gaps?.defGap ? `gap-${gaps.defGap}`: '';
    const RES_GAP = `sm:gap-${gaps.smGap} md:gap-${gaps.mdGap} lg:gap-${gaps.lgGap} xl:gap-${gaps.xlGap} xxl:gap-${gaps.xxlGap}`;
    return (
        <div>
            <p>grid grid-cols-1 {DEFAULT_GAP} {RES_GAP}</p>
            <div className={`grid grid-cols-1 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box"></div>
            </div>
            
            <p>grid grid-cols-2 {DEFAULT_GAP} {RES_GAP}</p>
            <div className={`grid grid-cols-2 ${DEFAULT_GAP}  ${RES_GAP} grid-container`}>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
            </div>
            
            <p>grid grid-cols-3 {DEFAULT_GAP} {RES_GAP}</p>
            <div className={`grid grid-cols-3 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
            </div>
            
            <p>grid grid-cols-4 {DEFAULT_GAP} {RES_GAP}</p>
            <div className={`grid grid-cols-4 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
            </div>
            
            <p>grid grid-cols-5 {DEFAULT_GAP} {RES_GAP}</p>
            <div className={`grid grid-cols-5 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
            </div>
            
            <p>grid grid-cols-8 {DEFAULT_GAP} {RES_GAP}</p>
            <div className={`grid grid-cols-8 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
                <div className="grid-box"></div>
            </div>
        </div>
    );
};