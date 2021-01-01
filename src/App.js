import { Container, Row, Col, Card, Jumbotron } from 'react-bootstrap';
import StatusGroup from './components/StatusGroup/StatusGroup';
import useAPI from './utils/useAPI';

const API_ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost/osp/public' : process.env.PUBLIC_URL;

const ColProps = {
  xs: 12,
  sm: 12,
  md: 6,
  lg: 6,
  xl: 3,
  className: 'mb-4',
};

export default function App() {
  const data = useAPI(`${API_ENDPOINT}/api/users/`, {}, 15000);
  const statusLabels = ['Dostępny', 'Niedostępny', 'Wydłużony', 'Mobilny'];
  console.log(process.env.PUBLIC_URL);
  return (
    <>
      <main>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h2 className="my-5">Podgląd statusów</h2>
            </Col>
          </Row>
          <Row className="my-5">
            {statusLabels.map((statusLabel, key) => (
              <Col {...ColProps} key={key}>
                <StatusGroup label={statusLabel} statusCode={key} items={data?.users} />
              </Col>
            ))}
          </Row>

          <Row>
            <Col xs={12}>
              <Jumbotron fluid>
                <Container>
                  <h2>Dostępność</h2>
                  <p className="mt-4 h2 font-weight-normal">
                    Jest dostępnych <b>{data?.available?.all}</b> strazaków w tym: <br />
                    <b>{data?.available?.drivers} </b> kierowców <br /> <b>{data?.available?.rescuers}</b> ratowników
                  </p>
                </Container>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
