export default class TelegramService {
    getUpdates() {
        return fetch('https://api.telegram.org/bot173322972:AAEOo2XWSglN11-SvXyCu9Wh6R9exxZlQkU/getUpdates')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.result;
            }).catch((error) => {
                console.error(error);
            });
    }
}
