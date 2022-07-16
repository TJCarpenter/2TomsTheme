import React from 'react';

import { Timeline } from './Timeline';

export default {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
