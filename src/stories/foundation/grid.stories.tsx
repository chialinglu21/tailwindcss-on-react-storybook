import React from 'react';
import { Meta } from '@storybook/react';
import { GridPage, GridGap} from '../../pages/grid-page';

const _gapOptions=[0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12];

export default{
    title: 'FOUNDATION/Grid',
    component: GridPage,
    argTypes: {
        defGap: {
            description: 'The space between elements',
            control: {
                type: 'select',
                options: [..._gapOptions]
            }
        },
        smGap: {
            control: {
                type: 'select',
                options: [..._gapOptions]
            }
        },
        mdGap: {
            control: {
                type: 'select',
                options: [..._gapOptions]
            }
        },
        xlGap: {
            control: {
                type: 'select',
                options: [..._gapOptions]
            }
        },
        xxlGap: {
            control: {
                type: 'select',
                options: [..._gapOptions]
            }
        }
    }
} as Meta

export const Grid  = (args: GridGap) => <GridPage {...args}></GridPage>;
Grid.args = {
    defGap: 4,
    smGap: 1.5,
    mdGap: 4,
    lgGap: 5,
    xlGap: 10,
    xxlGap: 10
} as GridGap
