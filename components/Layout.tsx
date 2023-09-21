import Navbar from "./Navbar";

interface LayoutProps{
    children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="flex flex-row gap-2 h-full">
            <Navbar />
            <div className="bg-slate-500 grow p-2">
                {children}
            </div>
        </div>
    );
}
 
export default Layout;