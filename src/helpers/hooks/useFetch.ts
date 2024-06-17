import { useEffect, useState } from "react"

interface FetchFunction<P, T> {
  (params: P): Promise<T>
}

interface useFetchResult<T> {
  data: T | null | undefined
  error: Error | null
  loading: boolean
}

const useFetch = <T, P>(fetchFunction: FetchFunction<P, T>, params?: P): useFetchResult<T> => {
   const [data, setdata] = useState<T | null>(null)
   const [error, seterror] = useState<Error | null>(null)
   const [loading, setloading] = useState<boolean>(true)

   const stringParams = params ? new URLSearchParams(params).toString() : ''
   useEffect(() => {
     (async () => {
      try {
        setloading(true)
        const result = await fetchFunction(params as P);
        setdata(result)
      } catch (error) {
        seterror(error as Error);
      } finally {
        setloading(false)
      }
     })()
   }, [fetchFunction, stringParams])
   return {data, error, loading}
}

export default useFetch