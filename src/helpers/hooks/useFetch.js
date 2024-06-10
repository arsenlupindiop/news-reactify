import { useEffect, useState } from "react"

const useFetch = (fetchFunction, params) => {
   const [data, setdata] = useState(null)
   const [error, seterror] = useState(null)
   const [loading, setloading] = useState(true)

   const stringParams = params ? new URLSearchParams(params).toString() : ''
   useEffect(() => {
     (async () => {
      try {
        setloading(true)
        const result = await fetchFunction(params);
        setdata(result)
      } catch (error) {
        setloading(error)
      } finally {
        setloading(false)
      }
     })()
   }, [fetchFunction, stringParams])
   return {data, error, loading}
}

export default useFetch