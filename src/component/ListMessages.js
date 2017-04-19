import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import './ListMessages.css';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const CardExampleWithAvatar = ({data}) => {
  return (  <Card>
    <CardMedia overlay={<CardTitle title={data.message.from.username} subtitle={data.message.from.first_name} />} >
      <img src={'https://api.telegram.org/file/bot173322972:AAEOo2XWSglN11-SvXyCu9Wh6R9exxZlQkU/'+data.photoImg.file_path.toString()} alt="img"/>
    </CardMedia>
  </Card>)
}

const StickerMsg = ({data}) => {
  console.log(data)

  return (  <Card>
    <CardMedia overlay={<CardTitle title={data.message.from.username} subtitle={data.message.from.first_name} />} >
      <img src={'https://api.telegram.org/file/bot173322972:AAEOo2XWSglN11-SvXyCu9Wh6R9exxZlQkU/'+data.sticker.file_path.toString()} alt="img"/>
    </CardMedia>
  </Card>)
}

class ListMessages extends Component {
    render() {
        if (!this.props.messages) {
            return <div/>
        }
        const messages = this.props.messages.map((result, index) => {
          if (result.photoImg) {
            return (
                <CardExampleWithAvatar key={index} data={result}/>
              )
          }

          if (result.sticker) {
            //console.log(result)
            return (
                <StickerMsg key={index} data={result}/>
              )
          }

          let nameText;
          if (result.message.from.username) {
            nameText = result.message.from.username + " : ";
          } else {
            nameText = result.message.from.first_name+" "+result.message.from.last_name+" : "
          }
            return (
                <ListItem className="ListItem" key={index} primaryText={nameText+result.message.text} />
            )
        })
        return (
            <div >
                <Paper className="Paper" zDepth={5} >
                    <List className="List">
                       {messages}
                    </List>
                </Paper>
            </div>
        );
    }

}

ListMessages.propTypes = {
    messages: PropTypes.array
}

export default ListMessages;
