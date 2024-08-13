import React from 'react';
import { codes } from '../constant';

const Codes = () => {
    return (
        <div style={styles.wrapper}>
            <h1 style={styles.h1}>Codes HTML</h1>
            <div style={styles.div}>
                <div style={styles.headerTab}>
                    <span style={styles.headerTabSpan}>Symbole</span>
                    <span style={styles.headerTabSpan}>Code Clavier</span>
                    <span style={styles.headerTabSpan}>Code Iso</span>
                    <span style={styles.headerTabSpan}>Code Css</span>
                    <span style={styles.headerTabSpan}>Code Hexadecimal</span>
                    <span style={styles.headerTabSpan}>Uni-code</span>
                    <span style={styles.headerTabSpan}>Code Html</span>
                    <span style={styles.headerTabSpan}>Html Entity</span>
                    <span style={styles.headerTabSpan}>Description</span>
                </div>

                {
                    codes.data.map((item, idx) => {
                        return <div key={idx} style={styles.contentTab}>
                            <span style={styles.contentTabSpan}>{item.symbole}</span>
                            <span style={styles.contentTabSpan}>{item.codeCla}</span>
                            <span style={styles.contentTabSpan}>{item.codeIso}</span>
                            <span style={styles.contentTabSpan}>{item.codeCss}</span>
                            <span style={styles.contentTabSpan}>{item.codeHex}</span>
                            <span style={styles.contentTabSpan}>{item.unicode}</span>
                            <span style={styles.contentTabSpan}>{item.codeHtml}</span>
                            <span style={styles.contentTabSpan}>{item.htmlEntity}</span>
                            <span style={{ ...styles.contentTabSpan, borderRight: "1px solid gray", fontSize:"75%" }}>{item.desc}</span>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Codes;


const styles = {
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        paddingTop: "100px",
        backgroundColor: "rgba(123, 123, 123, 0.3)"
    },
    h1: {
        textTransform: "uppercase",
        textDecoration: "underline",
        marginBottom: "5px"
    },
    div: {
        // border: "1px solid green",
        width: "80%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px 10px",
        borderRadius: "5px",
        backgroundColor: "#fff",
        overflowX: "auto"
    },
    headerTab: {
        display: "flex",
        // border:"1px solid red",
        justifyContent:"center",
        width: "80%",
        position: "relative",
        zIndex:22,
        paddingTop: "20px",
        justifyContent: "space-around"
    },
    headerTabSpan: {
        position: "relative",
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        paddingLeft: "1%",
        border: "1px solid gray",
    },
    contentTab: {
        display: "flex",
        // border:"1px solid red",
        width: "80%",
        position: "relative",
        justifyContent: "space-around"
    },
    contentTabSpan: {
        position: "relative",
        width: "100%",
        paddingLeft: "1%",
        borderLeft: "1px solid gray",
        borderBottom: "1px solid gray",
    }
}