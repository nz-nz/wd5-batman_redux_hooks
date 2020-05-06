import React from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './App.css';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import * as ActionCreators from './store/action_creatores';
import Err from "./components/Err";

class App extends React.Component {

    static propTypes = {
        moviesList: PropTypes.array.isRequired,
        getMovies: PropTypes.func.isRequired,
        errState: PropTypes.bool,
    }

    componentDidMount() {
        this.props.getMovies('batman');
    }

    onChange = (id) => {
        console.log(id);
        const newWatchedArray = this.state.watched.map((item) => {
            if (item.info.id === id) {
                console.log('found')
                return {
                    info: {
                        id: id,
                        watched: !item.info.watched,
                    }
                };
            }
            return item
        });
        console.log(newWatchedArray);

        localStorage.setItem("watched", JSON.stringify(newWatchedArray));

        this.setState({
            watched: newWatchedArray,
        });

    }

    onViewMore = () => {
        console.log('clicked details');
    }

    render() {
        console.log('main rnd');

        if (this.props.errState !== null) {
            return <Err />
        }

        return (
            <>
                <Container>
                    <Row>
                        <Col><h1>Batman Movies</h1></Col>
                    </Row>
                    {
                        this.props.children
                    }
                </Container>
            </>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        moviesList: store.app.movies || [],
        watched: store.app.watched || [],
        errState: store.app.errState,
    }
}

const mapDispatchToProps = (dispatcher) => {
    return {
        // вызывает внутри себя в action_creatores - updateMovies: (payload) => dispatcher(ActionCreators.updateMovies(payload)),
        getMovies: (payload) => dispatcher(ActionCreators.getMovies(payload)),
    }
};

const connected = connect(mapStateToProps, mapDispatchToProps)(App);
export default connected;