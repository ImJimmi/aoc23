import Day from "../components/Day.js";
import parsePuzzleInput from "../utils/Parser.js";

function getCards() {
    return parsePuzzleInput().map((line) => ({
        id: parseInt(line.split(" ").filter((str) => str.length > 0)[1]),
        winners: line
            .split(":")[1]
            .split("|")[0]
            .split(" ")
            .filter((str) => str.length > 0)
            .map((str) => parseInt(str)),
        numbers: line
            .split(":")[1]
            .split("|")[1]
            .split(" ")
            .filter((str) => str.length > 0)
            .map((str) => parseInt(str)),
    }));
}

function findMatches(card) {
    return card.numbers.filter((number) => card.winners.includes(number));
}

function calculateSumOfPoints() {
    return getCards()
        .map((card) => findMatches(card).length)
        .map((numWinners) => (numWinners > 0 ? 2 ** (numWinners - 1) : 0))
        .reduce((total, current) => (total += current));
}

function calculateTotalNumCards() {
    var cards = getCards();
    cards.forEach((card) => {
        findMatches(card)
            .map((_, index) => index + card.id)
            .forEach((cardCopyIndex) => {
                cards[cardCopyIndex]["instances"] =
                    (cards[cardCopyIndex]["instances"] ?? 1) +
                    (card["instances"] ?? 1);
            });
    });
    return cards.reduce(
        (total, current) => (total += current["instances"] ?? 1),
        0
    );
}

function Day4() {
    return (
        <Day
            day={4}
            description="Promoting gambling as a wholesome yule pastime"
            calculatePart1={() => {
                return calculateSumOfPoints();
            }}
            calculatePart2={() => {
                return calculateTotalNumCards();
            }}
        ></Day>
    );
}

export default Day4;
