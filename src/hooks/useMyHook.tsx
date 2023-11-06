import React, { useState } from 'react'

type Post = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const useMyHook = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Post[] | []>([])

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((e) => {
        setData(e)
        setTimeout(() => {
          setLoading(false)
        }, 500); 
      })
  }, [])

  return [data, loading]

}
