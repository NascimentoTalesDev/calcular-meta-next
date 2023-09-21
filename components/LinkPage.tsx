import Link from "next/link";

interface LinkPageProps {
    href: string;
    text: string;
}

const LinkPage: React.FC<LinkPageProps> = ({href, text}) => {
    return (
        <div className="text-xl font-semibold py-3 ">
            <Link href={href}>{text}</Link>
        </div>
    );
}
 
export default LinkPage;