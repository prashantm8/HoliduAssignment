import { BookifyReviews } from "./action";

const defaultState = {
    reviews:[],
    isLoading:false,
    endReached:false
};

bookifyReviewState = (state = defaultState, action) => {
    switch (action.type) {
        case BookifyReviews.getReviewsSuccess:
            return{
                ...state,
                reviews:action.data
            }
        case BookifyReviews.isLoading:
            return{
                ...state,
                isLoading:action.data
            }
        case BookifyReviews.endReached:
            return{
                ...state,
                isLoading:false,
                endReached:action.data
            }
        default:
            return state;
    }
}

export default bookifyReviewState;
