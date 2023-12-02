import Day from "../components/Day.js";
import parsePuzzleInput from "../utils/Parser.js";

function count(colour, round) {
    if (!round.includes(colour)) return 0;
    return parseInt(round.split(colour)[0].split(" ").at(-2));
}

function parseGame(line) {
    line = line.split(":");

    return {
        id: parseInt(line[0].split(" ")[1]),
        rounds: line[1].split(";").map((round) => ({
            red: count("red", round),
            green: count("green", round),
            blue: count("blue", round),
        })),
    };
}

function calculateSumOfPossibleGameIDs() {
    function isPossibleGame(game) {
        return game.rounds.every((round) => {
            return round.red <= 12 && round.green <= 13 && round.blue <= 14;
        });
    }

    return parsePuzzleInput()
        .map(parseGame)
        .filter(isPossibleGame)
        .reduce((total, current) => total + current.id, 0);
}

function calculateSumOfPowersOfMinimumCubeSets() {
    function getMinimumCubeSet(game) {
        function findMax(colour) {
            return game.rounds.reduce(
                (max, round) => (round[colour] > max ? round[colour] : max),
                0
            );
        }
        return {
            red: findMax("red"),
            green: findMax("green"),
            blue: findMax("blue"),
        };
    }

    function calculatePower(cubeSet) {
        return cubeSet.red * cubeSet.green * cubeSet.blue;
    }

    return parsePuzzleInput()
        .map(parseGame)
        .map(getMinimumCubeSet)
        .map(calculatePower)
        .reduce((total, current) => total + current, 0);
}

function Day2() {
    return (
        <Day
            day={2}
            description="Playing cube games with the sky elf"
            calculatePart1={() => {
                return calculateSumOfPossibleGameIDs();
            }}
            calculatePart2={() => {
                return calculateSumOfPowersOfMinimumCubeSets();
            }}
        ></Day>
    );
}

export default Day2;
