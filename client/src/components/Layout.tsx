import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const ref = useRef<any>()
  const [state, setstate] = useState([])
  useEffect(() => {
    if (state.length > 0) {
      const arrForLocal = JSON.stringify(state)
      localStorage.setItem('todo', arrForLocal)
    }
  }, [state])

  const todoHandler = () => {
    setstate([...state, ref.current.value])
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todo'))
    if(todos) {
      setstate(todos)
    }
  }, [])

  return (<div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
      <input ref={ref} type="text" />
      <button onClick={todoHandler}>Button set local</button>
    </footer>
  </div>)
}

export default Layout
