import './Title.css'

interface IProps {
    text: string
}
const Title = (props: IProps) => {
    const { text } = props;
    return (
        <div className="title">
            {text}
        </div>
    )
}

export { Title }