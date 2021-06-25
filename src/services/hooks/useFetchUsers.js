import { useEffect, useState } from "react";

const useFetchUsers = (apiUrl) => {
    
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setData(data.results)
            setLoading(true)
        })
        .catch(err => setError(err))
        .finally(() => {
            setLoading(false)
        })
    }, [])

    return {data, loading, error}
}

export default useFetchUsers