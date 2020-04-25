import React from 'react';
import './App.css';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    CardLink,
} from 'reactstrap';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: [], // список комиксов
            watched: [], // список смотрел / не смотрел
            errState: null, // состояние запроса - есть ошибка / всё ок
        }
    }

    componentDidMount() {

        const movies = fetch('http://api.tvmaze.com/search/shows?q=batman');

        movies
            .then((data) => {
                return data.json()
            })
            .then((data) => {

                console.log(data);
                this.setState({
                    list: data || [],
                })
            })
            .catch((e) => {
                console.log("REQUEST ERROR: ", e)
            });

    }

    render() {

        return (
            <>
                <Container>
                    <Row>
                        <Col><h1>Batman Movies</h1></Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        {*/}
                    {/*            JSON.stringify(this.state.list)*/}
                    {/*        }*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}

                <div className="root_card">
                    {
                        this.state.list.map(({
                            show,
                                             }) =>{
                                return (
                                        <Card key={ show.id } className="card_div">
                                            <CardImg top width="100%" src={ show.image.medium } alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle><h3>{ show.name }</h3></CardTitle>
                                                <CardText>{  show.summary  }</CardText>
                                                <CardSubtitle>{ show.premiered }</CardSubtitle>
                                                <CardLink href={ show.url }>Card Link</CardLink>
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
                            }
                        )
                    }
                </div>
                </Container>
            </>
        )
    }
}

export default App;