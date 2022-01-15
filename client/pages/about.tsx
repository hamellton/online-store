import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import Layout from '../src/components/Layout'

const AboutPage = () => {
    const [file, setFile] = useState(null)
    const [succesBlock, setSuccesBlock] = useState<boolean>(false)

    useEffect(() => {
        const fetchFunction = async () => {
            const request = await fetch('http://localhost:5000/test')
            const result = await request.json()
        }
        fetchFunction()
    }, [])

    const handleUploadFile = (event: any) => {
        setFile(event.currentTarget.files[0]);
    };

    const submit = () => {
        if(file) {
            const formData = new FormData()
            formData.append('file', file);
            formData.append('text', 'text');
            return fetch(`http://localhost:5000/send`, {
                method: 'POST',
                body: formData,
            })
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                      setSuccesBlock(true)
                    }
                })
        }
        alert('file not found!')
    }

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
        <input type="file" onChange={handleUploadFile} />
        <button onClick={submit}>send file</button>
        {succesBlock && <div>Success Post request, Image send!</div>}
    </Layout>
  )
}

export default AboutPage
