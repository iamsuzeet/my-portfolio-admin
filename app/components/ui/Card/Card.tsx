import { getClassNames } from '@/lib/utils';
import React from 'react';
import Box, { BoxAS, BoxProps } from '@/app/components/ui/Box/Box';
import { Color } from '@/app/components/ui/types';

export const CardClassList = `bg-white shadow-md rounded-xl p-4 flex flex-col`;

const borderRadiusClass = {
  sm: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
  none: 'rounded-none',
};

export type CardProps<T extends BoxAS = BoxAS> = BoxProps<T> & {
  backgroundColor?: Color<'bg'>;
  className?: string;
  bordered?: boolean;
  borderColor?: Color<'border'>;
  borderRadius?: keyof typeof borderRadiusClass;
  hoverBackgroundColor?: Color<'bg'>;
  children: React.ReactNode;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
    className,
    borderColor = 'border-cool-gray-300',
    bordered,
    borderRadius = 'none',
    hoverBackgroundColor,
    backgroundColor = 'bg-white',
    ...restProps
  } = props;

  const computedClassNames = getClassNames(
    CardClassList,
    className,
    {
      [`border border-solid ${borderColor}`]: bordered,
      [`${borderRadiusClass[borderRadius]}`]: !!borderRadius,
      [`hover:${hoverBackgroundColor}`]: !!hoverBackgroundColor,
    },
    backgroundColor
  );

  return React.createElement(
    Box,
    Object.assign(restProps, { ref, className: computedClassNames }),
    children
  );
});

Card.displayName = 'Card';

export default Card;
