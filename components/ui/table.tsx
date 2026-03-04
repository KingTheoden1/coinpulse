'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Renders a full-width table inside a responsive, horizontally scrollable container.
 *
 * @param className - Additional CSS class names to merge with the component's default table classes.
 * @param props - All other native `table` element props; they are forwarded to the underlying `<table>` element.
 * @returns A JSX element containing the `<table>` wrapped in a container `<div>` with slot attributes and merged class names.
 */
function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  );
}

/**
 * Renders a table header group (`<thead>`) with default border-bottom styling and a data-slot attribute.
 *
 * @param className - Additional class names appended to the component's default styles
 * @param props - Additional props spread onto the underlying `<thead>` element
 * @returns The rendered `<thead>` element with composed className and `data-slot="table-header"`
 */
function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return <thead data-slot="table-header" className={cn('[&_tr]:border-b', className)} {...props} />;
}

/**
 * Renders a table body element with default styling and a data-slot attribute for slot-based theming.
 *
 * @param className - Additional CSS classes to merge with the component's default styling
 * @returns A `<tbody>` element with `data-slot="table-body"` and default styling that removes the bottom border from the last row, merged with any provided `className`
 */
function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  );
}

/**
 * Renders a table footer element with default muted background, top border, and medium font weight.
 *
 * The component applies `data-slot="table-footer"`, merges the provided `className` with its default styles
 * (muted background at 50% opacity, top border, medium font weight, and no bottom border on the last row),
 * and forwards any additional props to the underlying `tfoot` element.
 *
 * @returns The rendered `tfoot` element with merged class names and forwarded props.
 */
function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className)}
      {...props}
    />
  );
}

/**
 * Renders a table row element with default row styling and a `data-slot="table-row"` attribute.
 *
 * @returns A `tr` element with the component's default classes merged with the provided `className` and all other props forwarded.
 */
function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a styled table header cell (`<th>`) with a data-slot of "table-head".
 *
 * @param className - Additional CSS classes to merge with the component's default header styles
 * @returns A `<th>` element with default header styling, data-slot="table-head", and any provided props applied
 */
function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a table cell element with default layout and checkbox-aware spacing.
 *
 * @param className - Additional CSS class names to merge with the component's defaults
 * @returns A `<td>` element with padding, middle alignment, no wrapping, and adjusted padding/positioning when it contains a checkbox
 */
function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  );
}

/**
 * Renders a styled table caption element.
 *
 * @returns A `caption` element with `data-slot="table-caption"` and merged caption classes (`text-muted-foreground mt-4 text-sm` plus any provided `className`).
 */
function TableCaption({ className, ...props }: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  );
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
