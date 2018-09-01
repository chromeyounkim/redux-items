import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetch } from '../actions/items';

class ItemsList extends Component {
    componentDidMount() {
        this.props.itemsFetch('http://5826ed963900d612000138bd.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Error!</p>
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>
        }

        return(
            <ul>
                {
                    this.props.items.map((i) => {
                        return <li key={i.id}> 
                                    {i.label}
                                </li>
                    })
                }
               

            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.itemsFetched,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        itemsFetch: (url) => dispatch(itemsFetch(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);