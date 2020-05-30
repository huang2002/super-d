export type DesignComponent = (props?: object | null, ...children: unknown[]) => any;

export const design = (tag: string, className: string | string[]): DesignComponent => (
    (props, ...children) => {
        const _props = {
            class: (props && (props as any).class) || className,
            ...props,
        };
        return X.createElement(tag, _props, ...children);
    }
);
