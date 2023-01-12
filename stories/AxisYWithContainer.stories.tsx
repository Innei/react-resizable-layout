import React, { useRef } from 'react';

import Resizable from '../src/Resizable';
import SampleBox from './components/SampleBox';
import SampleSeparator from './components/SampleSeparator';

import type { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'main/Resizable',
  component: Resizable,
} as ComponentMeta<typeof Resizable>;

const Template: ComponentStory<typeof Resizable> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div style={{ padding: '16px', background: 'red' }} />
      <Resizable {...props} containerRef={containerRef}>
        {({ position: y, separatorProps }) => (
          <div
            ref={containerRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: 'calc(100vh - 32px)',
              overflow: 'hidden',
            }}
          >
            <SampleBox id="top-block" height={y} theme="blue" size={y} />
            <SampleSeparator id="splitter" dir="horizontal" {...separatorProps} />
            <SampleBox id="bottom-block" height={`calc(100% - ${y}px)`} theme="red" />
          </div>
        )}
      </Resizable>
      <div style={{ padding: '16px', background: 'red' }} />
    </>
  );
};

export const AxisYWithContainer = Template.bind({});
AxisYWithContainer.args = {
  axis: 'y',
  initial: 100,
  min: 50,
  max: 300,
};
