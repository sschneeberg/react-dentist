import { Link } from 'react-router-dom';

function Procedures(props) {
    const list = props.procedures.map((procedure, id) => {
        return (
            <li key={'p ' + id}>
                {procedure.name}{' '}
                <Link to={`/procedures/${procedure.id}`}>[details]</Link>
            </li>
        );
    });
    return (
        <>
            <h1>This is the Procedures page, we offer: </h1>
            <ul>{list}</ul>
        </>
    );
}

export default Procedures;
