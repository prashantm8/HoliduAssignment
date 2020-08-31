import React , {Component} from 'react'
import { Provider } from 'react-redux';
import BookifyReviews from './src/screens/BookifyReviews';
import { store } from './src/redux/store';


class App extends Component {

  render () {
    return (
      <Provider store={store}>
        <BookifyReviews/>
      </Provider>
    )
  }
}

export default App