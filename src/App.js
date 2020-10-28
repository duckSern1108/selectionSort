import React, { useEffect,useState } from "react";
import ArrEle from "./ArrEle";
import "./App.css";
function App() {
    const [pointers, setPointers] = useState({
        i: 0,
        j: 1,
        minId: 0,
        arr: [],
    });
    const [start, setStart] = useState(false);
    const {arr,i,j,minId} = pointers
    useEffect(() => {
        if (start) {
            setTimeout(() => {
                const {i,j,arr,minId} = pointers
                if (i < arr.length - 1) {
                    if (j < arr.length) {
                        if (arr[j] < arr[minId]) {
                            // setMinId(j);
                            setPointers({...pointers,j : j + 1,minId : j})
                        }
                        else setPointers({...pointers,j : j + 1})
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
            }, 2000);
        }
    }, [start, pointers]);
    return (
        <>
            <div style={{ padding: "20px" }}>
                <label>Input array : </label>
                <input
                    type="text"
                    onChange={(e) => setPointers({...pointers, arr : JSON.parse(e.target.value)})}
                />
                <button onClick={() => setStart(true)}>Start</button>
                <button onClick={() => setStart(false)}>Stop</button>
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
