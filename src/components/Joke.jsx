export default function Joke(props){
    return (
        <>
        {props.Setup ? <p>Setup: {props.Setup}</p> : " "}
        <p>Punchline: {props.Punchline}</p>
        </>
    )
} 