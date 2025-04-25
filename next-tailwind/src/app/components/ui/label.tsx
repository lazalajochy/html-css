interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { }


export function Label({ children, ...pros }: LabelProps) {
    return (
        <label
            className="block text-sm/6 font-medium text-gray-900"
            {...pros}
        >
            {children}
        </label>
    )
}


export default Label;