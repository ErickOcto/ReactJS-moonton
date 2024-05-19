import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({
    type = '',
    className = '',
    defaultValue,
    variant = "primary",
    placeholder,
    isError,
    isFocused = false,
    ...props
}, ref) {

    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            defaultValue={defaultValue}
            className={`rounded-2xl py-[13px] px-7 w-full border-alerange ${isError && "input-error"} input-${variant} ${className}`}
            placeholder={placeholder}
            ref={input}
        />
    );
});
