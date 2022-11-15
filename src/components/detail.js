import { useParams } from "react-router-dom";
import Mascota from "./mascota";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const { useEffect, useState } = require("react");
export default function Detail() {
    const [mascota, setMascota] = useState({});
    const params = useParams();
    useEffect(() => {
        const URL =
            "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
        fetch(URL)
            .then((data) => data.json())
            .then((data) => {
                setMascota(data.find(obj => obj.id == params.mascotaId));
            });
    }, [params.mascotaId]);

    return (
        <div >
            <h1>{mascota.nombre}</h1>
            <img src={mascota.foto}></img>
            <h2>{mascota.raza} ({mascota.especie})</h2>
            <h5>{mascota.descripcion}</h5>
        </div>
    );
}