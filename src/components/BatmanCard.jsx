import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardLink,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Container,
    Row
} from "reactstrap";

export const BatmanCard = props => {

    const {
        image,
        name,
        summary,
        premiered,
        url,
    } = props;

    return (
        <Card className="card_div">
            <CardImg top width="100%" src={ image } alt="Card image cap" />
            <CardBody>
                <CardTitle><h3>{ name }</h3></CardTitle>
                <CardText>{  summary  }</CardText>
                <CardSubtitle>{ premiered }</CardSubtitle>
                <CardLink href={ url }>Card Link</CardLink>
            </CardBody>
            <CardBody>
                <Container>
                    <Row>
                        <Col><Button>Button1</Button></Col>
                        <Col><Button>Детали</Button></Col>
                    </Row>
                </Container>
            </CardBody>
        </Card>
    );
};

BatmanCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    premiered: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

BatmanCard.defaultProps ={
    image: '',
    name: '',
    summary: '',
    premiered: '',
    url: '',
}