
import React from 'react';
import { Meta } from '@storybook/react';
import { GridClass, GridPlaygroundPage } from '../../pages/grid-playground-page';

export default{
    title: 'PLAYGROUND/Grid',
    component: GridPlaygroundPage,
} as Meta

export const Grid = (args: GridClass) => <GridPlaygroundPage {...args}></GridPlaygroundPage>;
Grid.args = {
    containerClass: 'grid-cols-6',
    box1Class: '',
    box2Class: '',
    box3Class: 'col-span-4',
    box4Class: '',
    box5Class: 'col-span-2',
    box6Class: '',
    box7Class: '',
    box8Class: ''
} as GridClass;