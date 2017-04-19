import { GET_UPDATES, GET_UPDATES_SUCCESS, GET_UPDATES_FAIL, GET_PHOTO_SUCCESS, GET_STICKER_SUCCESS } from '../Actions/TelegramActions'
import _ from 'lodash'

const TelegramMessages = (state = {
    messages: []
}, action) => {
    switch (action.type) {
        case GET_UPDATES:
            return state

        case GET_UPDATES_SUCCESS:
            {
                if (action.data.ok) {

                    return { messages: _.reverse(action.data.result) }
                }

                return state
            }

        case GET_UPDATES_FAIL:
            return state

        case GET_PHOTO_SUCCESS:
            const file = action.file

            const newMessages = state.messages.map(item => {
                if (item.message.photo && !item.photoImg) {
                    const id = item.message.photo[2].file_id
                    if (id === file.file_id) {
                        let newItem = item
                        newItem.photoImg = file
                        return newItem
                    }
                }
                return item
            })

            return { messages: newMessages }


        case GET_STICKER_SUCCESS:
            const sticker = action.file
            console.log(sticker)
            const newMessagesStickers = state.messages.map(item => {
                if (item.message.sticker && !item.photoImg) {
                    const id = item.message.sticker.file_id
                    if (id === sticker.file_id) {
                        let newItem = item
                        newItem.sticker = sticker
                        return newItem
                    }
                }
                return item
            })

            return { messages: newMessagesStickers }




        default:
            return state
    }
}

export default TelegramMessages
