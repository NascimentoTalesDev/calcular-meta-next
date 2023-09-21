interface TextAreaProps {
    cols: number;
    rows: number;
    value: string;
    required?: boolean;
    onChange: any;
    name?: string;
    id?: string;

}

const TextArea: React.FC<TextAreaProps> = ({name, id, cols, onChange, rows, value, required}) => {
    return (
        <div className="text-gray-800">
            <textarea className="outline-none" onChange={onChange} name={name} id={id} cols={cols} rows={rows}>{value}</textarea>
        </div>
    );
}
 
export default TextArea;