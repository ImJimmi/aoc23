import Day1 from "./day01/Day1";
import Day2 from "./day02/Day2";

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
                    rows="16"
                    wrap="off"
                ></textarea>
            </div>
        </form>
    );
}

function App() {
    return (
        <div className="App py-5 px-2">
            <div className="container bg-light py-5 px-4 rounded shadow border">
                <h1 className="display-1 mb-5 text-center">
                    Advent of Code 2023
                </h1>

                <div className="row">
                    <InputForm className="col-lg"></InputForm>

                    <div className="mx-4 col-lg">
                        <Day1></Day1>
                        <Day2></Day2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
