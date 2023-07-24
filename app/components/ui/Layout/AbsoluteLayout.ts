import React, { forwardRef } from 'react';
import { getClassNames } from '@/lib/utils';
import Box, { BoxProps } from '@/app/components/ui/Box/Box';

type AbsoluteLayoutProps = BoxProps & {
  scrollable?: boolean;
  removeAbsolute?: boolean;
};

const AbsoluteLayout = forwardRef<HTMLElement, AbsoluteLayoutProps>(
  (props, ref) => {
    const { scrollable, className, children, removeAbsolute, ...restProps } =
      props;
    const computedClassNames = getClassNames(
      { scrollbars: scrollable },
      className,
      `${
        removeAbsolute ? '' : 'absolute h-full'
      } w-full top-0 bottom-0 left-0 right-0 border-inherit`
    );

    return React.createElement(
      Box,
      Object.assign(restProps, {
        ref,
        className: computedClassNames,
      }),
      children
    );
  }
);

AbsoluteLayout.displayName = 'AbsoluteLayout';

export default AbsoluteLayout;
