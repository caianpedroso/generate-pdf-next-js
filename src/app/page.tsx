"use client"
import Head from "next/head";
import Image from "next/image";
import ReactDOMServer from "react-dom/server";
import { Button, Table, Typography, Layout, Col, Row } from "antd";
import { Wrapper } from "./app.style";
import Logo from "./logo.png";
import { dataJson } from "./dataJson";

export default function Home() {

    const data = dataJson.data[0].parcels.map(item => {
        return({
            key: item.number,
            portion: item.number,
            amortization: item.amortization.toString(),
            fee: item.fee.toString(),
            mip: item.mip.toString(),
            dfi: item.dfi.toString(),
            tac: item.tac.toString(),
            parcel: item.parcel.toString(),
            remaining_balance: item.remaining_balance.toString(),
        });
    });

    const columns = [
        {
            title: "Parcela",
            dataIndex: "portion",
            key: "portion",
            cellFontSize: '8px'
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

    const content = () => {
        return (
            <Layout style={{ backgroundColor: '#000', padding: '0 10px 10px 10px' }}>
                <Layout style={{ backgroundColor: '#ffffff', height: '100%', display: 'flex', alignItems: 'center' }}>
                    <Image
                        src={Logo}
                        style={{
                            width: '100px',
                            height: '100px',
                        }}
                        sizes="33vw"
                        alt="Picture"
                    />
                    <Typography.Title level={5} style={{ color: '#000' }}>
                        Resumo da simulação
                    </Typography.Title>
                </Layout>
                <Row>
                    <Col span={3}>
                        <Image
                            src={dataJson.data[0].bank_image}
                            style={{
                                width: '75px',
                                height: '75px',
                            }}
                            width={75}
                            height={75}
                            sizes="33vw"
                            alt="Picture of the author"
                        />
                        <Typography.Title level={5} style={{ color: '#000' }}>
                            {dataJson.data[0].bank_name}
                        </Typography.Title>
                    </Col>
                    <Col span={5}>
                        <Typography.Title level={5} style={{ color: '#000' }}>
                            Relacionamento
                        </Typography.Title>
                    </Col>
                    <Col span={4}>
                        <Typography.Title level={5} style={{ color: '#000' }}>
                            Taxa Efetiva
                        </Typography.Title>
                    </Col>
                    <Col span={3}>
                        <Typography.Title level={5} style={{ color: '#000' }}>
                            CESH
                        </Typography.Title>
                    </Col>
                    <Col span={5}>
                        <Typography.Title level={5} style={{ color: '#000' }}>
                            Total das prestações
                        </Typography.Title>
                    </Col>
                    <Col span={4}>
                        <Typography.Title level={5} style={{ color: '#000' }}>
                            Primeira parcela
                        </Typography.Title>
                    </Col>
                </Row>
                <Table
                    dataSource={data}
                    columns={columns}
                    bordered
                    size='small'
                    pagination={false}
                />
            </Layout>
        );
    };
    const handlePrint = async () => {
        const opt = {
            filename:     'myfile.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', orientation: 'portrait', format: 'a4' }
        };

        const html2pdf = (await import("html2pdf.js/dist/html2pdf.min.js")).default;
        const printContent = ReactDOMServer.renderToString(content());
        // @ts-ignore
        html2pdf().set(opt).from(printContent).save();
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
              <Button type="primary" onClick={() => handlePrint()}>
                Print
              </Button>
              {content()}
            </Wrapper>
        </>
    );
};
