export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl bg-alerange py-[13px] text-center ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            <span className="text-base text-white font-semibold">{children}</span>
        </button>
    );
}
