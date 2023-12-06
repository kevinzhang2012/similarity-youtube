import React, { HTMLAttributes, forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const paragraphVariants = cva('max-w-prose text-slate-700 dark:text-slate-300 mv-2 text-center', {
    variants: {
        size: {
            default: 'text-base sm:text-lg',
            sm: 'text-sm, sm:text-base',
        }
    },
    defaultVariants: {
        size: 'default'
    }
});

export type ParagraphProps = {
    // text: string
} & HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof paragraphVariants>;

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({ className, size, children, ...props }, ref) => {
    // console.log({ text })
    return (
        <p ref={ref} {...props} className={cn(paragraphVariants({size, className}))}>{children}</p>
    )
});

export default Paragraph;