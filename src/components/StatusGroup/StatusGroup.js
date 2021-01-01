import { Card } from 'react-bootstrap';
import List from '../List/List';

export default function StatusGroup({ label, statusCode, items }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{label}</Card.Title>
        <>
          <List items={items} status={statusCode} />
        </>
      </Card.Body>
    </Card>
  );
}
