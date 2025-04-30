export default function Button(props){
    return (
        <button style={{backgroundColor: props.bgColor}}>
            {props.cta}
        </button>
    )
}