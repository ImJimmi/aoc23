import { useState } from "react";

function calculateCalibrationSum(digitsOptions) {
    function extractDigits(line) {
        return line.split("").reduce((digits, char, charIndex) => {
            digitsOptions.forEach((digitOptions, digit) => {
                digitOptions.forEach((digitOption) => {
                    if (
                        parseInt(char) === digitOption ||
                        line.substring(
                            charIndex,
                            charIndex + String(digitOption).length
                        ) === digitOption
                    )
                        digits.push(digit);
                });
            });
            return digits;
        }, []);
    }

    return document
        .getElementById("input-textarea")
        .value.split("\n")
        .map(extractDigits)
        .map((digits) => {
            if (digits.length === 0) return 0;
            return digits[0] * 10 + digits[digits.length - 1];
        })
        .reduce((total, current) => (total += current));
}

function Part(props) {
    return (
        <div className={props.className}>
            <h5>{props.name}</h5>

            <div class="d-flex justify-content-start">
                <button
                    className="btn btn-primary"
                    onClick={(event) => {
                        event.preventDefault();
                        props.setter(
                            calculateCalibrationSum(props.digitsOptions)
                        );
                    }}
                >
                    Calculate
                </button>
                <p className="my-auto mx-3">{props.result}</p>
            </div>
        </div>
    );
}

function Day1() {
    var [part1Result, setPart1Result] = useState();
    var [part2Result, setPart2Result] = useState();

    function Part1(props) {
        return (
            <Part
                className={props.className}
                name="Part 1"
                setter={setPart1Result}
                result={part1Result}
                digitsOptions={[
                    [0],
                    [1],
                    [2],
                    [3],
                    [4],
                    [5],
                    [6],
                    [7],
                    [8],
                    [9],
                ]}
            ></Part>
        );
    }

    function Part2(props) {
        return (
            <Part
                className={props.className}
                name="Part 2"
                setter={setPart2Result}
                result={part2Result}
                digitsOptions={[
                    [0, "zero"],
                    [1, "one"],
                    [2, "two"],
                    [3, "three"],
                    [4, "four"],
                    [5, "five"],
                    [6, "six"],
                    [7, "seven"],
                    [8, "eight"],
                    [9, "nine"],
                ]}
            ></Part>
        );
    }

    return (
        <div id="day1">
            <div className="row">
                <h4 className="col">Day 1</h4>
                <Part1 className="col"></Part1>
                <Part2 className="col"></Part2>
            </div>
        </div>
    );
}

export default Day1;
