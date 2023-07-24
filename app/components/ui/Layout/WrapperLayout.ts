import React, { forwardRef } from 'react';
import { getClassNames } from '@/lib/utils';
import Box, { BoxProps } from '@/app/components/ui/Box/Box';

const WrapperLayout = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { className, children, ...restProps } = props;
  const computedClassNames = getClassNames(className, `h-full overflow-hidden`);

  return React.createElement(
    Box,
    Object.assign(restProps, {
      ref,
      className: computedClassNames,
    }),
    children
  );
});

WrapperLayout.displayName = 'WrapperLayout';

export default WrapperLayout;
