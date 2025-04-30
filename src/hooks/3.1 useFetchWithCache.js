import axios from 'axios'
import { useState, useEffect, useRef, useCallback } from 'react'

const useFetchWithCache = (url) => {

  const [data, setData] = useState([])
  const cache = useRef({})

  const fetchData = useCallback(async (url) => { //prevent unnecessary renders
    if (!url) return
    try {
      if (cache.current[url]) {
        setData(cache.current[url])
      } else {
        const response = await axios.get(url)
        cache.current[url] = response.data
        setData(response.data)
      }
    } catch (e) {
      console.error(e)
    }
  }, []);

  useEffect(() => {
    fetchData(url) 
  }, [url, fetchData]) // avoids refetch if same URL is passed again

  return data
}

export default useFetchWithCache