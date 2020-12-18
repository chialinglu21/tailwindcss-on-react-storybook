import React from 'react';

import { Button2 } from './Button';

export default {
  title: 'FUNDATION/Button2',
  component: Button2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button2 {...args} />;

export const Primary1 = Template.bind({});
Primary1.args = {
  primary: true,
  label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
