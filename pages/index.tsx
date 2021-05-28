import Link from 'next/link'
import React from 'react'
import { Container } from 'reactstrap'

const IndexPage = () => (
  <Container>
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Container>

)

export default IndexPage
