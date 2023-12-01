import Day1 from "./day01/Day1";

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
                ></textarea>
            </div>
        </form>
    );
}

function App() {
    return (
        <div className="App p-5">
            <div className="container bg-light p-5 rounded shadow border">
                <h1 className="display-1 mb-5">Advent of Code 2023</h1>

                <div class="row">
                    <InputForm className="col-4"></InputForm>

                    <div className="col">
                        <Day1></Day1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
