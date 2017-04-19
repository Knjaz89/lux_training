import { combineReducers } from 'redux'
import TelegramMessages from './TelegramReducers'
import appData from './CommorReducers'

const reducers = combineReducers({
	TelegramMessages,
	appData
})

export default reducers