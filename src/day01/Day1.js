import Day from "../components/Day.js";
import parsePuzzleInput from "../utils/Parser.js";

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

    return parsePuzzleInput()
        .map(extractDigits)
        .map((digits) => {
            if (digits.length === 0) return 0;
            return digits[0] * 10 + digits[digits.length - 1];
        })
        .reduce((total, current) => (total += current));
}

function Day1() {
    return (
        <Day
            day={1}
            description="Help the elves read the calibration document"
            calculatePart1={() => {
                return calculateCalibrationSum([
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
                ]);
            }}
            calculatePart2={() => {
                return calculateCalibrationSum([
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
                ]);
            }}
        ></Day>
    );
}

export default Day1;
