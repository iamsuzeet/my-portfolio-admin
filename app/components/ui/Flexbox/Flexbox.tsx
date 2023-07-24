import React from 'react';

import {
  Align,
  AlignClassMapping,
  Direction,
  DirectionClassMapping,
  Flex,
  FlexClassMapping,
  Justify,
  JustifyClassMapping,
  Wrap,
  WrapClassMapping,
} from './Flexbox.schema';
import Box, { BoxProps } from '@/app/components/ui/Box/Box';
import { getClassNames } from '@/lib/utils';

export interface Props {
  className?: string;
  align?: Align;
  justify?: Justify;
  direction?: Direction;
  wrap?: Wrap;
  display?: Flex;
}

export type FlexboxProps = React.PropsWithChildren & Props & BoxProps;

const Flexbox = React.forwardRef<HTMLElement, FlexboxProps>((props, ref) => {
  const {
    as,
    display = 'flex',
    children,
    className,
    align = 'flex-start',
    justify = 'flex-start',
    direction = 'row',
    wrap = 'nowrap',
    ...restProps
  } = props;
  const computedClasses = getClassNames(
    FlexClassMapping[display],
    AlignClassMapping[align],
    DirectionClassMapping[direction],
    JustifyClassMapping[justify],
    WrapClassMapping[wrap],
    className
  );
  return React.createElement(
    Box,
    { ...restProps, as, className: computedClasses, ref },
    children
  );
});

Flexbox.displayName = 'Flexbox';

export { Flexbox };
