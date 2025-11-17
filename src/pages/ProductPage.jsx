import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductPage() {


    const { id } = useParams()
    console.log(id);

    const api = `https://fakestoreapi.com/products/${id}`

    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(api)
            .then((res) => {
                setProduct(res.data)
                console.log(res.data);
            })
            .catch(err => console.error('Errore', err))
    }, [])

    return (

        <div className="container">
            <img
                src={product.image}
                alt={product.title}
                className="pt-4"
                style={{ height: '500px', padding: '10px', objectFit: 'contain' }}
            />

        </div>
    )

}