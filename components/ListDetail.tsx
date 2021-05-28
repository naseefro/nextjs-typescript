import * as React from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'

import { Anime } from '../interfaces'

type ListDetailProps = {
  item: Anime
}

const ListDetail = ({ item: anime }: ListDetailProps) => (
  <Row>
    <Col>
      <Card>
        <CardHeader>
          <h1>{anime?.attributes?.titles?.en_jp}</h1>
        </CardHeader>
        <CardBody>
          <p>{anime?.attributes?.description}</p>
        </CardBody>
      </Card>
    </Col>
  </Row>
)

export default ListDetail
