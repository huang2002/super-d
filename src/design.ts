/**
 * Type of design components
 * (similar to `X.createElement`, except that
 * element tag is predefined and a default
 * class name will be injected if `class` property
 * doesn't exist in `props`; note that if you are
 * specifying custom class names in `props`, you'll
 * need to include the default one to make styles work.)
 */
export type DesignComponent = (props?: object | null, ...children: unknown[]) => any;
/** dts2md */
/** 
 * Design a type of components
 * @param tag The element tag
 * @param className Default class name(s)
 * @returns A component factory
 */
export const design = (tag: string, className: string | string[]): DesignComponent => (
    (props, ...children) => {
        const _props = {
            class: (props && (props as any).class) || className,
            ...props,
        };
        return X.createElement(tag, _props, ...children);
    }
);
