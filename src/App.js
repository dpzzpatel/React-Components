import { Container,Card ,Image,Row,Col,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import NavDatas from './navigationdata';




function App(){ 
  return (
        <Container className="mt-3">
          {NavDatas.map((Rows,rowindex)=>{
            return(
              <Row xs={1} sm={2} md={3} className="mb-5" key={"row"+rowindex}>
                 {Rows.map((Cols,colindex)=>{
                  return(
                    <Col key={"col"+colindex} className="d-flex flex-column jalign-items-center gap-2">
                        <Card className="bg-dark text-white text-center">
                          <img  className="img-fluid" src={Cols.image} alt="Card image" />
                          <Card.ImgOverlay>
                          </Card.ImgOverlay>
                        </Card>
                        <Button variant="dark"><Link to={Cols.url}>Click here to visit</Link></Button>
                    </Col>
                  )
                 })}
              </Row>
            )
          })}
        </Container>
  );
}
export default App;
