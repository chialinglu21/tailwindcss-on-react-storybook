
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
            <hr></hr>
            
            <p>Quarter / Three Quarters</p>
            <div className={`grid grid-cols-4 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box"></div>
                <div className="grid-box col-span-3">col-span-3</div>
            </div>
            
            <p>Half / Quarter / Two Eighths</p>
            <div className={`grid grid-cols-8 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box col-span-4">col-span-4</div>
                <div className="grid-box col-span-2">col-span-2</div>
                <div className="grid-box col-span-1">col-span-1</div>
                <div className="grid-box col-span-1">col-span-1</div>
            </div>
            
            <p>Two Thirds / Third</p>
            <div className={`grid grid-cols-3 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box col-span-2">col-span-2</div>
                <div className="grid-box col-span-1">col-span-1</div>
            </div>
            
            <p>Half / Three Sixths</p>
            <div className={`grid grid-cols-6 ${DEFAULT_GAP} ${RES_GAP} grid-container`}>
                <div className="grid-box col-span-3">col-span-3</div>
                <div className="grid-box col-span-1">col-span-1</div>
                <div className="grid-box col-span-1">col-span-1</div>
                <div className="grid-box col-span-1">col-span-1</div>
            </div>
        </div>
    );
};