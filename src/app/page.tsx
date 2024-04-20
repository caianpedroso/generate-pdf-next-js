// "use client"
//
// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import Image from 'next/image';
// import styles from './page.module.css';
//
// export default function Home() {
//     const [tableData, setTableData] = useState([
//         ['Bambo', 'World', '07066279211'],
//         ['Rachel', 'Los Angeles', '7845521'],
//         ['Harvey', 'Chicago', '9865371'],
//     ]);
//
//     function demo() {
//         let obj = new jsPDF('landscape');
//         obj.setFontSize(18);
//         obj.text('Sample Table Report', 20, 20);
//         obj.setFontSize(12);
//         // @ts-ignore
//         obj.autoTable({ html: '.table' })
//         // @ts-ignore
//         obj.autoTable({
//             startX: 30,
//             startY: 40,
//             head: [['Name', 'City', 'Phone No.']],
//             body: tableData,
//             headStyles: {
//                 fillColor: [241, 196, 15],
//                 fontSize: 15,
//             },
//         });
//         obj.save('example.pdf');
//     }
//
//     return (
//         <div>
//             <div className={styles.buttonContainer}>
//                 <button className={styles.customButton} onClick={demo}>
//                     Download PDF
//                 </button>
//             </div>
//             <div className={styles.tableContainer}>
//                 <h2>Preview Table</h2>
//                 <table className={styles.previewTable}>
//                     <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>City</th>
//                         <th>Phone No.</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     {tableData.map((row, index) => (
//                         <tr key={index}>
//                             {row.map((cell, cellIndex) => (
//                                 <td key={cellIndex}>{cell}</td>
//                             ))}
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// teste 2
// "use client"

// import * as React from "react";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import GeneratePDF from "@/components/GeneratePDF";
// // const GeneratePDF = dynamic(() => import("../components/GeneratePDF"),{ssr:false});
// const DynamicHeader = dynamic(() => import('../components/GeneratePDF'), {
//     loading: () => <p>Loading...</p>, ssr:false
// })
//
// export default function Home() {
//     const ref = React.useRef();
//
//     // @ts-ignore
//     return(
//         <div className="main">
//         <div className="content" ref={ref}>
//             <h1>Hello PDF</h1>
//             <p id="text">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam animi, molestiae quaerat assumenda neque culpa ab aliquam facilis eos nesciunt! Voluptatibus eligendi vero amet dolorem omnis provident beatae nihil earum!
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, est. Magni animi fugit voluptates mollitia officia libero in. Voluptatibus nisi assumenda accusamus deserunt sunt quidem in, ab perspiciatis ad rem.
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium reprehenderit, quasi dolorum deserunt, nisi dolores quae officiis odio vel natus! Pariatur enim culpa velit consequatur sapiente natus dicta alias!
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, asperiores error laudantium corporis sunt earum incidunt expedita quo quidem delectus fugiat facilis quia impedit sit magni quibusdam ipsam reiciendis quaerat!
//             </p>
//         </div>
//         <GeneratePDF html={ref}/>
//         {/*<DynamicHeader html={ref}/>*/}
//     </div>);
// }


import type { NextPage } from 'next'
import Page from '../components/Page'

const Home: NextPage = () => {
    return (
        <>
            <a href="/api/pdf" download="generated_pdf.pdf" className="downloadBtn">Download PDF</a>
            <Page>
                <h1>Generated PDFn</h1>
                <p>As you can see you can scroll without issues and select text.</p>
            </Page>
            <Page>
                <h1>Page 2</h1>
                <p>As you can see you can scroll without issues and select text.</p>
            </Page>
        </>
    )
}

export default Home
