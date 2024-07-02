import "../styles/ControlledForm.css";
const ControlledForm = ({ status }) => {

    if (status === "success") {
        return <h1>Correct!</h1>
    } else {
        return (
            <>
                <h2>Quiz App (status: {status})</h2>
                <p>In which city is there a billboard that turns air into drinkable water?</p>
                <form>
                    <textarea disabled={status === "submitting"}></textarea>
                    <button disabled={status === "empty" || status === "submitting"}>Submit</button>
                </form>
                {status === 'error' &&
                    <p className="Error">
                        Good guess but a wrong answer. Try again!
                    </p>
                }
            </>
        );
    }
}

export default ControlledForm;