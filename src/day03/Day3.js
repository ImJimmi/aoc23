import Day from "../components/Day.js";
import parsePuzzleInput from "../utils/Parser.js";

function adjacent(part, symbol) {
    return (
        part.y >= symbol.y - 1 &&
        part.y <= symbol.y + 1 &&
        part.xRange.some((x) => x >= symbol.x - 1 && x <= symbol.x + 1)
    );
}

function makePart() {
    return {
        value: 0,
        y: 0,
        xRange: [],
    };
}

function findPartsAndSymbols() {
    var parts = [];
    var symbols = [];
    parsePuzzleInput().forEach((line, y) => {
        var currentPart = makePart();
        currentPart.y = y;

        line.split("").forEach((char, x) => {
            if ("0123456789".includes(char)) {
                currentPart.value = currentPart.value * 10 + parseInt(char);
                currentPart.xRange.push(x);
            } else {
                if (currentPart.xRange.length > 0) {
                    parts.push({ ...currentPart });
                    currentPart = makePart();
                }

                if (!".".includes(char)) {
                    symbols.push({
                        symbol: char,
                        y: y,
                        x: x,
                    });
                }
            }
        });

        if (currentPart.xRange.length > 0) parts.push({ ...currentPart });
    });

    parts = parts.filter((part) =>
        symbols.some((symbol) => adjacent(part, symbol))
    );

    return {
        parts: parts,
        symbols: symbols,
    };
}

function calculateSumOfMachinePartIDs() {
    return findPartsAndSymbols().parts.reduce(
        (total, number) => (total += number.value),
        0
    );
}

function calculateSumOfGearRatios() {
    const { parts, symbols } = findPartsAndSymbols();
    return symbols
        .filter((symbol) => symbol.symbol === "*")
        .map((star) => ({
            star: star,
            parts: parts.filter((part) => adjacent(part, star)),
        }))
        .filter((pair) => pair.parts.length >= 2)
        .map((pair) =>
            pair.parts.reduce((ratio, part) => (ratio *= part.value), 1)
        )
        .reduce((total, ratio) => (total += ratio));
}

function Day3() {
    return (
        <Day
            day={3}
            description="Weird machine thing"
            calculatePart1={() => {
                return calculateSumOfMachinePartIDs();
            }}
            calculatePart2={() => {
                return calculateSumOfGearRatios();
            }}
        ></Day>
    );
}

export default Day3;
