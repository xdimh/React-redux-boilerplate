import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/reducers'

export default function appStore(initialState = {}) {
    const store = createStore(rootReducer, initialState,applyMiddleware(thunkMiddleware));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/reducers', () => {
            const nextReducer = require('../reducers/reducers').default
            store.replaceReducer(nextReducer)
        })
    }
    return store
}
