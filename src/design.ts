/**
 * Type of design components
 * (similar to `X.createElement`, except that
 * element tag is predefined and a default
 * class name will be injected if `class` property
 * doesn't exist in `props`; note that default
 * class name(s) and other default props may be
 * overwritten by your props, and if this happens,
 * you may need to deal with it yourself.)
 */
export type DesignComponent = (props?: object | null, ...children: unknown[]) => any;
/** dts2md break */
/**
 * Design a type of components
 * @param tag The element tag
 * @param className Default class name(s)
 * @param defaults Optional default props
 * @returns A component factory
 */
export const design = (
    tag: string,
    className: string | string[],
    defaults?: object | null
): DesignComponent => (props, ...children) => {
    const _props = {
        class: (props && (props as any).class) || className,
        ...defaults,
        ...props,
    };
    return X.createElement(tag, _props, ...children);
};
