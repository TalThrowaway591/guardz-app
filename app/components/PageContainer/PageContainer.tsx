import "./PageContainer.css"

interface IProps {
    children: any
}
const PageContainer = (props: IProps) => {
    const { children } = props;

    return <div className="page-container">{children}</div>
}

export { PageContainer }