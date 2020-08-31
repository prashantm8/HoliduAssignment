
import Axios from 'axios';
import { BASE_URL } from '../../utils/Constants';

export const BookifyReviews = {
    getReviewsSuccess: 'getReviewsSuccess/BookifyReviews',
    isLoading: 'isLoading/BookifyReviews',
    endReached: 'endReached/BookifyReviews'
};

export const getReviewSuccess = (data) => ({
    type: BookifyReviews.getReviewsSuccess,
    data
})

export const isLoading = (data) => ({
    type: BookifyReviews.isLoading,
    data
})

export const endReached = (data) => ({
    type: BookifyReviews.endReached,
    data
})

export function getReviews(request) {
    return (dispatch, getState) => {
        dispatch(isLoading(true));
        Axios.get(BASE_URL+`?_page=${request.pageNumber}&_limit=${request.pageSize}`).then((resp)=>{
            if(resp.data.length == 0){
                dispatch(endReached(true))
            }
            let currentReviews = getState().bookifyReviewState.reviews
            dispatch(getReviewSuccess([...currentReviews,...resp.data]))
            dispatch(isLoading(false))

        }).catch((err) => {
            console,log('ERROR: ', err)
            dispatch(isLoading(false));
        })
    }
}

