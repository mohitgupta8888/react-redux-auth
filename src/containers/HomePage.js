
import { connect } from 'react-redux';

import Home from '../components/Home';

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(Home);
export { connectedHomePage as HomePage };