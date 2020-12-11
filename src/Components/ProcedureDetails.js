function ProcedureDetails(props) {
    console.log(props);
    return (
        <>
            <h1>details</h1>
            <h1>{props.procedure.name}: </h1>
            <h4>{props.procedure.description}</h4>
        </>
    );
}

export default ProcedureDetails;
