import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
    handleDeleteUser = (user) => {
        console.log('>>> check user delete: ', user);
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>> check props: ', this.props);
        let listUsers = this.props.dataRedux;

        return (
            <>
                <div>
                    Home
                </div>
                <div>
                    {listUsers && listUsers.length > 0 ?
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp;
                                    <span onClick={() => this.handleDeleteUser(item)}>
                                        X
                                    </span>
                                </div>
                            );
                        }) :
                        <p>No users available</p>
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )
    } 
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
