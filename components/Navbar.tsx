import LinkPage from "./LinkPage";

const Navbar = () => {
    return (
        <div className="flex flex-col min-w-[300px] bg-neutral-700 min-h-full pl-5 text-white">
            <LinkPage href="/" text="Home"></LinkPage>
            <LinkPage href="/calcular-meta" text="Calcular Meta"></LinkPage>
        </div>
    );
}
 
export default Navbar;