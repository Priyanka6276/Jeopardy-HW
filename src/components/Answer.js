export default function Answer ({ random }) {
    const loaded = () => {
        return (
            <div>
                <h2>Score: </h2>
                <h2>Let's Play</h2>
                <button type="submit">Get Question</button>
                <h3>Category: {random[0].category.title}</h3>
                <h4>Points: {random[0].value}</h4>
                <h3>Answer: {random[0].question}</h3>
                <button type="submit" className="submit">Click To Reveal Question</button>
                <h3 className="hide">{random[0].answer}</h3>
            </div>
        ) 
    }

    const loading = () => {
        return <h2>Generating Answers</h2>
    }
    return random ? loaded() : loading()

    
}


