"use client"
import Head from "next/head";
import Image from "next/image";
import ReactDOMServer from "react-dom/server";
import { Inter } from "@next/font/google";
import { Button, Table, Typography, Layout } from "antd";
const inter = Inter({ subsets: ["latin"] });
import { Wrapper } from "./app.style";
import ImageTest from "./image.png";
import { render } from "react-dom";
import { dataJson } from "./dataJson";

export default function Home() {

    const data = dataJson.data[0].parcels.map(item => {
        return({
            key: item.number,
            portion: item.number,
            amortization: item.amortization,
            fee: item.fee,
            mip: item.mip,
            dfi: item.dfi,
            tac: item.tac,
            parcel: item.parcel,
            remaining_balance: item.remaining_balance,
        })
    })

    const columns = [
        {
            title: "Parcela",
            dataIndex: "portion",
            key: "portion",
        },
        {
            title: "Amortização",
            dataIndex: "amortization",
            key: "amortization",
        },
        {
            title: "Juros",
            dataIndex: "fee",
            key: "fee",
        },
        {
            title: "Seguro MIP",
            dataIndex: "mip",
            key: "mip",
        },
        {
            title: "Seguro DFI",
            dataIndex: "dfi",
            key: "dfi",
        },
        {
            title: "Tarifas",
            dataIndex: "tac",
            key: "tac",
        },
        {
            title: "Parcela",
            dataIndex: "parcel",
            key: "parcel",
        },
        {
            title: "Saldo Devedor",
            dataIndex: "remaining_balance",
            key: "remaining_balance",
        },
    ];

    const imageStyle = {
        borderRadius: '10px',
    }

    const content = () => {
        // @ts-ignore
        return (
            <Layout style={{ backgroundColor: '#fff', padding: '0 20px' }}>
                {/*<Image*/}
                {/*    src={ImageTest}*/}
                {/*    style={imageStyle}*/}
                {/*    alt="Picture of the author"*/}
                {/*/>*/}
                <Image
                    src={dataJson.data[0].bank_image}
                    style={imageStyle}
                    width={75}
                    height={75}
                    alt="Picture of the author"
                />
                <Typography.Title level={5} className={"title"} style={{ color: '#000' }}>
                    {dataJson.data[0].bank_name}
                </Typography.Title>
                <Table
                    dataSource={data}
                    columns={columns}
                    bordered
                    pagination={false}
                />
            </Layout>
        );
    };
    const handlePrint = async () => {
        // @ts-ignore
        const html2pdf = (await import("html2pdf.js/dist/html2pdf.min.js")).default;
        const printContent = ReactDOMServer.renderToString(content());
        html2pdf().set().from(printContent).save();
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                {/* render UI */}
                <div className={"btn__container"}>
                    <Button type="primary" onClick={() => handlePrint()}>
                        Print
                    </Button>
                </div>
                {content()}
            </Wrapper>
        </>
    );
}
