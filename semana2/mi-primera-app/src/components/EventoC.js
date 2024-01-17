import "../styles/Evento.css"
function EventoC({ image, title, dateLiteral})
    return(
    <div className="card-container">
        <img className="card-image" 
        src={require(`../images/${image}.jpg`)}
        alt="Foto del evento" />

        <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-date">{dateLiteral} </p>
            <p className="card-place">{placeLiteral}</p>
        </div>
    </div>
    )