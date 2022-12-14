export default function Reveal () {
    const loaded = () => {
        return (
            <div>
                <button type="submit">Click To Reveal Question</button>
            </div>
        ) 
    }

    const loading = () => {
        return <h2>Generating Question...</h2>
    }
    return random ? loaded() : loading()
}