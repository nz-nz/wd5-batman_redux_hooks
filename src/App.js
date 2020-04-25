import React from 'react';
import './App.css';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import { BatmanCard } from './components/BatmanCard'

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
                                        <BatmanCard
                                            key = { show.id }
                                            image = { show.image.medium }
                                            name = { show.name }
                                            summary={ show.summary }
                                            premiered={ show.premiered }
                                            url={ show.url }
                                        />
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