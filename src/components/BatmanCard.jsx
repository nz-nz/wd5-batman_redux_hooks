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
    Row,
} from "reactstrap";

export const BatmanCard = props => {

    const {
        id,
        image,
        name,
        summary,
        premiered,
        url,
    } = props;

    // const watched = false;



    return (
        <Card className="card_div">
            <CardImg top width="100%" src={ image } alt="Card image cap" />
            <CardBody>
                <CardTitle>{ name }</CardTitle>
                <CardText>
                    <small className="text-muted" dangerouslySetInnerHTML={ { __html: summary } } />
                </CardText>
                <CardSubtitle>
                    <small className="text-muted"> { premiered }</small> <br />
                    <small><CardLink href={ url }>Visit movie page</CardLink></small>
                </CardSubtitle>
                    <br />
                    <Row>
                        <Col>
                            <Button
                                size="sm"
                                onClick={ () => { props.onChange(id) } }
                                color = { props.watched ? "success" : "outline-secondary" }
                            >
                                { props.watched ? "Смотрел" : "Не смотрел"}
                            </Button>
                        </Col>
                        <Col>
                            <Button
                                color="info"
                                size="sm"
                                onClick={ () => { props.onViewMore(id) } }
                            >
                                Детали
                            </Button>
                        </Col>
                    </Row>
            </CardBody>
        </Card>
    );
};

BatmanCard.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    premiered: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onViewMore: PropTypes.func.isRequired,
    watched: PropTypes.bool.isRequired,
};

BatmanCard.defaultProps ={
    image: '',
    name: '',
    summary: '',
    premiered: '',
    url: '',
}