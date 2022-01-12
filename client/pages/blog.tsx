import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: green;
`

function Blog() {
    return (
        <div>
            <Title>Title for Blog page</Title>
            <Link href="/">Back for the Home page</Link>
        </div>
    )
}

export default Blog
