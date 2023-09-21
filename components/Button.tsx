interface ButtonProps {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
    id?: string;
    value: string;
}

const Button: React.FC<ButtonProps> = ({type, value, onClick, id }) => {
    return (
        <div>
            <button type={type}>{value}</button>
        </div>
    );
}
 
export default Button;