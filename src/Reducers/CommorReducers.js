import {INIT_APP} from '../Actions/Action'

const appData = (state = {
	appName: 'TelegramLux'
}, action) => {
    switch (action.type) {
        case INIT_APP:
            return state

        default:
            return state
    }
}

export default appData