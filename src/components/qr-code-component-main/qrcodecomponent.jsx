import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import QrCodeImage from './images/image-qr-code.png';
import './styles.css';

function QRCodeComponent(){
    return(
        <Container className="d-flex vh-100 justify-content-center align-items-center overflow-auto">
            <Card className="qrCodeCard ">
                <Card.Img as={Image} src={QrCodeImage} className="qrCodeImg"/>
                <Card.Title className="qrCodeTitle mt-2">Improve your front-end skills by building projects</Card.Title>
                <Card.Text className="qrCodeText mt-2 mb-4">
                    Scan the QR code to visit Frontend mentor and take your coding skills to next level.
                </Card.Text>
            </Card>
        </Container>
    )
}

export default QRCodeComponent;