import React from "react";
import Pointer from "./Pointer";
function ArrEle({ data, targetJ, targetI, targetMin }) {
    return (
        <div style={{ width: "50px" }}>
            <div
                style={{
                    height: "300px",
                    display: "flex",
                    alignItems: "flex-end",
                }}
            >
                <div style={{width: "100%",}}>
                    <Pointer
                        style={{ color: "black", height: "10px", marginTop: 0 }}
                        pointer={data !== 0 && data}
                        target={true}
                    />
                    <div
                        className="container"
                        style={{
                            width: "100%",
                            border: "1px solid black",
                            background: targetJ ? "blue" : "yellow",
                            height: `${data * 20}px`,
                            transition: `1.5s all`,
                        }}
                    ></div>
                </div>
            </div>

            <Pointer target={targetI} bgrTargeted="black" pointer="i" />
            <Pointer target={targetJ} bgrTargeted="blue" pointer="j" />
            <Pointer target={targetMin} bgrTargeted="red" pointer="min" />
        </div>
    );
}

export default ArrEle;
