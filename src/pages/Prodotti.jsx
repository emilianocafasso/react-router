import axios from "axios"
import { useState, useEffect, useEffectEvent } from "react"

export default function Prodotti() {
    const api = 'https://fakestoreapi.com/products'
    const [producs, setProducts] = useState([])

    useEffect(() => {
        axios.get(api)
            .then(res => setProducts(res.data))
            .catch(err => console.error('Errore', err))
    })


    return (
        <>

        </>
    )
}