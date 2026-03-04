import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine multiple class value inputs into a single merged CSS class string while resolving Tailwind conflicts.
 *
 * @param inputs - One or more class value entries (strings, arrays, or objects with conditional keys) to be combined
 * @returns The resulting class string with duplicate or conflicting Tailwind classes merged
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as a US dollar currency string.
 *
 * @param amount - The numeric amount to format
 * @returns The formatted US dollar string (e.g., "$1,234.56")
 */
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
