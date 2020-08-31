import React, { Component } from 'react'
import { Text, View, FlatList,ActivityIndicator } from 'react-native'
import ThemeComponent from '../../components/ThemeComponent'
import styles from './styles'
import ListItem from '../ListItem'
import { connect } from 'react-redux'
import { getReviews } from '../../redux/bookifyReviews/action'
import { WIDTH } from '../../utils/deviceDimensions'

class BookifyReviews extends Component {
    constructor (props) {
        super(props)
        this.state= {
            pageSize:10,
            pageNumber:1
        }
    }
    componentDidMount () {
        this.props.getReviews({...this.state})
    }
    renderItem = ({ item }) => (
        <ListItem {...item} />
      );
    callPagination = () => {
        if(!this.props.isLoading && !this.props.endReached){
            this.setState({
                pageNumber:this.state.pageNumber+1
            },()=>{
                this.props.getReviews({...this.state})
            })
        }
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <ThemeComponent id={'091021'} hotelName={'la Casa de las Flores'}>
                    <View style={styles.reviewsContainer}>
                        {this.props.isLoading && !this.props.endReached?
                        <View style={ styles.indicatorContainer}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                        :null}
                        <Text style={styles.reviewText}>
                            {this.props.reviews.length} Review
                        </Text>
                        <FlatList
                            data={this.props.reviews}
                            renderItem={this.renderItem}
                            keyExtractor={(item,index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            onEndReached={this.callPagination}
                        />
                    </View>
                </ThemeComponent>

            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReviews: (request) => dispatch(getReviews(request))
    }
};

const mapStateToProps = (state) => {   
    return {
        reviews:state.bookifyReviewState.reviews,
        isLoading:state.bookifyReviewState.isLoading,
        endReached:state.bookifyReviewState.endReached
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(BookifyReviews) 