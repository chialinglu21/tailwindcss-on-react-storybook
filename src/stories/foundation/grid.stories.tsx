import React from 'react';
import { Meta } from '@storybook/react';
import { GridPage } from '../../pages/grid-page';

export default{
    title: 'FOUNDATION/Grid',
    component: GridPage 
} as Meta

export const Grid  = () => <GridPage></GridPage>;