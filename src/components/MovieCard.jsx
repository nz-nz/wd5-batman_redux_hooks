import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
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
import * as URL from '../router/url'

export const MovieCard = props => {

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
                            <Link
                                to={ `${ URL.DETAILS }/${ id }`}
                                className="btn btn-info btn-sm"
                            >
                                Детали через Link
                            </Link>
                        </Col>
                    </Row>
            </CardBody>
        </Card>
    );
};

MovieCard.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    summary: PropTypes.string,
    premiered: PropTypes.string,
    url: PropTypes.string,
    onChange: PropTypes.func,
    onViewMore: PropTypes.func,
    watched: PropTypes.bool,
};

MovieCard.defaultProps ={
    image: '',
    name: '',
    summary: '',
    premiered: '',
    url: '',
    onChange: '',
    onViewMore: '',
    watched: '',
}