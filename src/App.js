import React, { useEffect, useRef, useState } from "react";
import ArrEle from "./ArrEle";
import "./App.css";
function App() {
    const arrayInput = useRef("");
    const [speed, setSpeed] = useState(500);
    const [pointers, setPointers] = useState({
        i: 0,
        j: 1,
        minId: 0,
        arr: [],
    });
    const [start, setStart] = useState(false);
    const { arr, i, j, minId } = pointers;
    useEffect(() => {
        if (start) {
            setTimeout(() => {
                const { i, j, arr, minId } = pointers;
                if (i < arr.length - 1) {
                    if (j < arr.length) {
                        if (arr[j] < arr[minId]) {
                            setPointers({ ...pointers, j: j + 1, minId: j });
                        } else setPointers({ ...pointers, j: j + 1 });
                    } else {
                        setPointers((curPointers) => {
                            const { i, minId, arr } = curPointers;
                            let temp = arr[i];
                            arr[i] = arr[minId];
                            arr[minId] = temp;
                            return { arr, i: i + 1, j: i + 2, minId: i + 1 };
                        });
                    }
                }
            }, speed);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, pointers]);
    return (
        <>
            <div style={{ padding: "20px" }}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setPointers({
                            i: 0,
                            j: 1,
                            minId: 0,
                            arr: JSON.parse(arrayInput.current.value),
                        });
                        setStart(true);
                    }}
                >
                    <label>Input array : </label>
                    <input type="text" ref={arrayInput} />
                    <button>Start</button>
                </form>
                <label>Slow </label>
                <input
                    type="range"
                    min="500"
                    max="5000"
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                />
                <label>Fast </label>
                <button onClick={(start) => setStart(!start)}>
                    {start ? "Stop" : "Resume"}{" "}
                </button>
            </div>
            <hr />
            <div style={{ padding: "50px" }}>
                <div
                    className="container"
                    style={{ border: "2px solid black", paddingLeft: "50px" }}
                >
                    {arr.length > 0 && (
                        <>
                            {arr.map((item, index) => (
                                <ArrEle
                                    data={item}
                                    key={index}
                                    targetJ={index === j}
                                    targetI={index === i}
                                    targetMin={index === minId}
                                />
                            ))}
                            <ArrEle
                                data={0}
                                key={arr.length}
                                targetJ={arr.length === j}
                                targetI={arr.length === i}
                                targetMin={arr.length === minId}
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
