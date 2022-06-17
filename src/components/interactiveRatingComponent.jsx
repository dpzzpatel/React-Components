import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import staricon from '../images/icon-star.svg';
import ThankYou from '../images/illustration-thank-you.svg';
import { Image } from "react-bootstrap";
import React, { useState } from 'react';

const cardImgStyle = {
    marginLeft:'4%',
    marginTop:"4%",
    width:"10%",
    height:"10%",
    backgroundColor:"rgba(39,47,57,255)",
    borderRadius:"50%",
    padding:"3%"
}
const ThankYouImageStyle = {
    marginTop:"30px",
    marginLeft:"auto",
    marginRight:"auto",
    width:"50%",
}
const ratingStyle = {
    width:"40px",
    height:"40px",
    backgroundColor:"rgba(39,47,57,255)",
    color:"white",
    fontWeight:"bold",
    cusror:"pointer",
    textAlign:"center",
    ineHeight:"20px"
}

function InteractiveRatingComponent(){
    const [isratingsubmitted,setIsRatingSubmitted] = useState(false);
    const [rating,setRating] = useState(0);
    const handleMouseOver = (e)=>{
        e.target.style.backgroundColor =   "#f27c29" ;
    }

    const handleMouseOut = (e)=>{
        if(e.target.innerHTML != rating)
            e.target.style.backgroundColor = "rgba(39,47,57,255)";
        else
            e.target.style.backgroundColor = "rgba(124,137,153,255)";
            
    }
    const changeRating = (e)=>{
        let ele = document.getElementsByClassName("ratingnumbers");
        ele[parseInt(e.target.innerHTML)-1].style.backgroundColor = "rgba(124,137,153,255)";
        if(rating!=0)
            ele[parseInt(rating)-1].style.backgroundColor = "rgba(39,47,57,255)";
        setRating(e.target.innerHTML);
    }

    const handleSubmit = (e)=>{
        setIsRatingSubmitted(true);
    }

    function SelectRating(){
        return (
            <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor:"rgba(20,20,24,255)"}}>
                <Card className="col-lg-3 p-2 col-md-6" style={{backgroundColor:"rgba(31,38,48,255)",borderRadius:"20px"}}>
                    <Card.Img as={Image}  src={staricon} style={cardImgStyle} />
                    <Card.Body>
                        <Card.Title style={{color:"white"}}>How did we do?</Card.Title>
                        <Card.Text style={{color:"rgba(125,133,143,255)"}}>
                            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                        </Card.Text>
                        <div className="d-grid mt-4 gap-4">
                            <div className="d-flex gap-1 justify-content-around">
                                {
                                    [...Array(5).keys()].map((ele,index)=>{
                                        return(
                                            <div key={index} className="rounded-circle p-2 ratingnumbers" 
                                            style={ratingStyle} 
                                            onMouseOver={handleMouseOver}
                                            onMouseOut={handleMouseOut}
                                            onClick={changeRating}
                                            value ={ele+1}>
                                                {ele+1}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Button variant="primary" 
                                    size="lg" 
                                    className="rounded-pill" 
                                    onClick={handleSubmit}
                                    style={{backgroundColor:"rgba(253,119,19,255)"}}>
                                Submit
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
        </Container>
        )
    }
    function ThankYouMessage(){
        return(
            <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor:"rgba(20,20,24,255)"}}>
                <Card className="col-lg-3 p-2 col-md-6" style={{backgroundColor:"rgba(31,38,48,255)",borderRadius:"20px"}}>
                    <Card.Img as={Image}  src={ThankYou} style={ThankYouImageStyle} />
                    <Card.Body>
                        <Card.Title className="col-md-8 rounded-pill text-center p-1 mx-auto mt-3" style={{backgroundColor:"rgba(39,44,55,255)",color:"#cb763b"}}>You selected {rating} out of 5</Card.Title>
                        <Card.Text style={{color:"rgba(125,133,143,255)"}}>
                            <div className="d-flex flex-column gap-3 mt-4 align-items-center">
                                <h3 style={{color:"white"}}>Thank You!</h3> 
                                <p style={{color:"#9aa0ab"}}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
        </Container>
        )
    }
    return(
        isratingsubmitted?  <ThankYouMessage /> :  <SelectRating />
        )
}

export default InteractiveRatingComponent;