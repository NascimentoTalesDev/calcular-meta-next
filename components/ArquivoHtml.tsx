const arquivo =  require("../pages/test.html")


//export default class CustomDocument extends Document {
//    render() {
//        return(
//            )
//        }
//    }

const ArquivoHtml = () => {
    return (
        <div>
            <iframe src={arquivo}></iframe>
        </div>
    );
}
 
export default ArquivoHtml;