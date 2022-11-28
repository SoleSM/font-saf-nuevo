
export const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imagen} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title" style={{"textAlign": "justify", "fontWeight": "bolder"}}>{props.titulo}</h5>
                    <p className="card-text" style={{"textAlign": "justify", "margin":"3%"}}>{props.texto}</p>
                </div>
        </div>
    )
}