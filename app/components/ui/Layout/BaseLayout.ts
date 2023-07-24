import React, { forwardRef } from 'react';
import { getClassNames } from '@/lib/utils';
import Box, { BoxProps } from '@/app/components/ui/Box/Box';

const BaseLayout = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { className, children, ...restProps } = props;
  const computedClassNames = getClassNames(
    className,
    `flex h-full w-full flex-col`
  );

  return React.createElement(
    Box,
    Object.assign(restProps, {
      ref,
      className: computedClassNames,
    }),
    children
  );
});

BaseLayout.displayName = 'BaseLayout';

export default BaseLayout;
