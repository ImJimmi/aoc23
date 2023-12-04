import Day1 from "./day01/Day1";
import Day2 from "./day02/Day2";
import Day3 from "./day03/Day3";
import Day4 from "./day04/Day4";

function InputForm(props) {
    return (
        <form id="input-form" className={`text-start ${props.className}`}>
            <div id="puzzle-input" className="form-group my-3">
                <label htmlFor="puzzle-input" className="mb-2">
                    <h3>Puzzle input:</h3>
                </label>
                <textarea
                    id="input-textarea"
                    className="form-control font-monospace"
                    rows="12"
                    wrap="off"
                ></textarea>
            </div>
        </form>
    );
}

function App() {
    return (
        <div className="App py-sm-5 p-2 text-light">
            <div className="container p-4 p-md-5 bg-glass shadow-sm rounded">
                <h1 className="display-1 mb-5 text-center">
                    Advent of Code <strong>2023</strong>
                </h1>

                <div className="row">
                    <InputForm className="col-lg"></InputForm>

                    <div className="mx-lg-4 col-lg">
                        <Day1></Day1>
                        <hr></hr>
                        <Day2></Day2>
                        <hr></hr>
                        <Day3></Day3>
                        <hr></hr>
                        <Day4></Day4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
