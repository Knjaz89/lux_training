export const GET_UPDATES = 'GET_UPDATES'
export const GET_UPDATES_START = 'GET_UPDATES_START'
export const GET_UPDATES_SUCCESS = 'GET_UPDATES_SUCCESS'
export const GET_UPDATES_FAIL = 'GET_UPDATES_FAIL'
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS'
export const GET_STICKER_SUCCESS = 'GET_STICKER_SUCCESS'

// import TelegramService from '../services/telegramService'


// const telegramService = new TelegramService()



export const getUpdatesStart = () => ({
    type: GET_UPDATES_START
})

export const getUpdates = () => {
    return dispatch => {
	    return fetch('https://api.telegram.org/bot173322972:AAEOo2XWSglN11-SvXyCu9Wh6R9exxZlQkU/getUpdates')
	        .then(response => {
                return response.json()
            })
	        .then(json => {
                json.result.forEach(item => {
                    if (item.message.photo) {
                        const file_id = item.message.photo[2].file_id
                        dispatch(getFoto(file_id))
                    }
                    if (item.message.sticker) {
                        dispatch(getSticker(item.message.sticker.file_id))
                    }                    
                })


                return dispatch(getUpdatesSuccess(json))
            })
        }
}

export const repeatRequests = () => {
    return dispatch => {
        dispatch(getUpdatesStart())
        dispatch(getUpdates())
        
        setInterval(() => {
            dispatch(getUpdatesStart())
            dispatch(getUpdates())
        }, 3000)
    }
}



export const getUpdatesSuccess = (json) => ({
    type: GET_UPDATES_SUCCESS,
    data: json
})

export const getUpdatesFail = () => ({
    type: GET_UPDATES_FAIL
})

export const getFoto = (file_id) => {
    return dispatch => {
        return fetch('https://api.telegram.org/bot173322972:AAEOo2XWSglN11-SvXyCu9Wh6R9exxZlQkU/getFile'
                , {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    file_id: file_id,
                  })
                }
            )
            .then(response => {
                return response.json()
            })
            .then(resp=>{
                dispatch(getPhotoSuccess(resp.result))
            })
        }
}

export const getPhotoSuccess = (file) => ({
    type: GET_PHOTO_SUCCESS,
    file: file
})

export const getSticker = (file_id) => {
    return dispatch => {
        return fetch('https://api.telegram.org/bot173322972:AAEOo2XWSglN11-SvXyCu9Wh6R9exxZlQkU/getFile'
                , {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    file_id: file_id,
                  })
                }
            )
            .then(response => {
                return response.json()
            })
            .then(resp=>{
                dispatch(getStickerSuccess(resp.result))
            })
        }
}

export const getStickerSuccess = (file) => ({
    type: GET_STICKER_SUCCESS,
    file: file
})



