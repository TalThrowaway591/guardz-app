import "./DataEntity.css"

interface IProps {
    title: string;
    body: string;
}
const DataEntity = (props: IProps) => {
    const { title, body } = props;

    return <div className="data-entity-container">
        <div className="data-entity-header">
            <div className="data-entity-title">{title}</div>
            <div className="data-entity-remove-button">x</div>
        </div>
        <div className="data-entity-body">{body}</div>
    </div>
}

export { DataEntity }