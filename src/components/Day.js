import { useState } from "react";

function Part(props) {
    var [result, setResult] = useState();

    return (
        <div className={`${props.className} mb-3`}>
            <h5 className="mb-3">{`Part ${props.part}`}</h5>

            <button
                className="btn btn-primary mb-2"
                onClick={(event) => {
                    event.preventDefault();
                    setResult(props.calculateResult());
                }}
            >
                Calculate
            </button>
            <div className="my-auto mx-0 px-0">
                <textarea
                    className="text-center font-monospace form-control d-inline-block"
                    rows="1"
                    style={{ resize: "none" }}
                    value={result}
                ></textarea>
            </div>
        </div>
    );
}

function Day(props) {
    return (
        <div className="row mb-3">
            <div className="col-xl-4">
                <h4>{`Day ${props.day}`}</h4>
                <p>{props.description}</p>
            </div>

            <div className="row col-xl">
                <Part
                    className="col-lg"
                    part="1"
                    calculateResult={props.calculatePart1}
                ></Part>
                <div className="col-1"></div>
                <Part
                    className="col-lg"
                    part="2"
                    calculateResult={props.calculatePart2}
                ></Part>
            </div>
        </div>
    );
}

export default Day;
