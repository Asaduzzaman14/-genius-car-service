import { useEffect, useState } from "react";

const useServiceDetail = (servceId) => {
    const [service, setService] = useState({})

    useEffect(() => {
        const url = `https://limitless-brushlands-16762.herokuapp.com/service/${servceId}`
        console.log('url', url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [servceId])

    return [service]
}

export default useServiceDetail