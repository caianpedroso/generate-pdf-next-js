import React from "react";
import { jsPDF,HTMLOptionImage } from "jspdf";
import { toPng,toCanvas } from "html-to-image";
type props = {

    html?: React.MutableRefObject<HTMLDivElement>;

};

const GeneratePdf: React.FC<props> = ({ html }) => {
    const generatePdf = () => {
        const doc = new jsPDF();

        // @ts-ignore
        let split=doc.splitTextToSize(document.getElementById("text").innerText,200);
        // @ts-ignore
       // let image = document.getElementById("image").getAttribute('src');
        // @ts-ignore
        doc.text(document.querySelector(".content > h1").innerHTML,75,5);
        // @ts-ignore
        //doc.addImage(image,70,7,60,60);
        doc.text(split,15,75);
        doc.output("dataurlnewwindow");

    };

    const generateImage=async ()=>{
        // @ts-ignore
        const image = await toPng(html.current,{quality:0.95});
        const doc = new jsPDF();

        doc.addImage(image,'JPEG',5,22,200,160);
        doc.save();


    }
    return (

        <div className="button-container">
            <button onClick={generateImage}>
                Get PDF using image
            </button>
            <button onClick={generatePdf}>
                Get PDF as text
            </button>
        </div>

    );
};

export default GeneratePdf;