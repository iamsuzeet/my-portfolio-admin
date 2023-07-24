import React, { forwardRef } from 'react';
import { getClassNames } from '@/lib/utils';
import Box, { BoxProps } from '@/app/components/ui/Box/Box';

const MainLayout = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { className, children, as = 'main', ...restProps } = props;
  const computedClassNames = getClassNames(
    className,
    `h-full w-full grow flex flex-col bg-gray-98`
  );

  return React.createElement(
    Box,
    Object.assign(restProps, {
      ref,
      className: computedClassNames,
      as,
    }),
    children
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
