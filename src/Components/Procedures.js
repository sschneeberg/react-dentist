function Procedures(props) {
    const list = props.procedures.map((procedure) => {
        return <li>{procedure}</li>;
    });
    return (
        <div>
            This is the Procedures page, we offer:
            <ul>{list}</ul>
        </div>
    );
}

export default Procedures;
