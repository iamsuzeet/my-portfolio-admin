import React, { forwardRef } from 'react';
import { getClassNames } from '@/lib/utils';
import { Flexbox, FlexboxProps } from '@/app/components/ui/Flexbox/Flexbox';

const FlexLayout = forwardRef<HTMLElement, FlexboxProps>((props, ref) => {
  const { className, children, ...restProps } = props;
  const computedClassNames = getClassNames(className, `h-full w-full`);

  return React.createElement(
    Flexbox,
    Object.assign(restProps, {
      ref,
      className: computedClassNames,
    }),
    children
  );
});

FlexLayout.displayName = 'FlexLayout';

export default FlexLayout;
