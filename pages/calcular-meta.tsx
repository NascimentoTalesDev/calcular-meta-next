import Button from "@/components/Button";
import Layout from "@/components/Layout";
import TextArea from "@/components/TextArea";
import axios from "axios";
import { useState } from "react"


const CalcularMeta = () => {
    const [texto, setTexto] = useState("")
    
    function calcularF(ev: any) {
        ev.preventDefault()
        
        let data = texto
        axios.post("/api/converter", {data})        
        
    }
    
    
    
    return (
        <Layout>
            <h1>Calcular meta</h1>
            <form onSubmit={calcularF}>
                <TextArea required cols={100} rows={10} value={texto} onChange={(ev : any) => setTexto(ev.target.value)}></TextArea>
                <Button type="submit" value="Calcular"></Button>
            </form>
        </Layout>
    );
}
 
export default CalcularMeta;