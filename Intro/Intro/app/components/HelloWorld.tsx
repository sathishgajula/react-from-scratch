interface IHelloProps {
    data: string;
}

class HelloComponent extends React.Component<IHelloProps, void> {
    render(): JSX.Element {
        return <div>Hello {this.props.data}</div>;
    }
}