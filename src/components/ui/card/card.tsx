import React from 'react';
import clsx from 'clsx';
import './card.css';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('card', className)}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('card-header', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardBody = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx('card-body', className)}
    {...props}
  />
));
CardBody.displayName = 'CardBody';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('card-footer', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card, CardHeader, CardBody, CardFooter,
};
