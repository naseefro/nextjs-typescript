import * as React from 'react'
import { Anime } from '../interfaces'
import { Col, ListGroupItem, Row } from 'reactstrap'
import Link from 'next/link'

type Props = {
  items: Anime[]
}

const List = ({ items }: Props) => (
  <Row>
    {Array.isArray(items) && items.length > 0 && items.map((item) => (
      <Link href={`/animes/${item.id}`}>
        <Col xs="3">
          <ListGroupItem key={item.id}>
            {item.attributes?.titles?.en_jp}
          </ListGroupItem>
        </Col>
      </Link>
    ))}
  </Row>
)

export default List
