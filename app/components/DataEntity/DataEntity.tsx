import "./DataEntity.css"

type Props = {
    entry: {
        title: string;
        body: string;
        ip: string;
        createdTimestamp: number;
    }
}
const DataEntity = (props: Props) => {
    const { title, body, ip, createdTimestamp } = props.entry;

    const dateStr = (new Date(createdTimestamp)).toDateString();
    return <div className="data-entity-container">
        <div className="data-entity-header">
            <div className="data-entity-title">{title}</div>
            {/* <div className="data-entity-remove-button">x</div> */}
        </div>
        <div className="data-entity-body">{body}</div>
        <div className="data-entity-footer">by <b>{ip}</b> at <b>{dateStr}</b></div>
    </div>
}

export { DataEntity }