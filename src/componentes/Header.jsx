import "./Header.css"

export function Header({ user, time }) {
    return (
        <>
            <div className="header">
                <img src="" alt="logo del restaurant" />
                <p>{"Hola, Usuario"}</p>
                <p>{"time"}</p>
                <img src="" alt="boton salir" />
            </div>
        </>

    )
}