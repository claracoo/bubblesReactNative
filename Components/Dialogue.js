import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat';
import {
    renderAvatar,
    renderBubble,
    renderSystemMessage,
    renderMessage,
    renderMessageText,
    renderCustomView,
  } from './SystemMessage';
import SystemMessage from './SystemMessage'


const Dialogue = (props) => {
    const [messages, setMessages] = useState([]);
 
    useEffect(() => {
        setMessages([
        {
            _id: 1,
            text: 'Hi, Sam. What is your concern right now?',
            user: {
            _id: 2,
            name: 'Hi Sam',
            avatar: "https://gm1.ggpht.com/XmdWgDgmAnUERhzVhxFHRVIsJyX4Tcv-_C1BMpXZ74LZ1c1uGH3cBZA3gHBI0Lg0xRK9EwbpB_SrQlqW3ONfCfZc24xqKCCHQ5rfjkVcfQM3VJa-Ml9EpnYu7a6wLJg1bmBkUkKDgm0qo9qfKMAwpYz1QB1lsaiLWjUOHQfHYLI3TLCy7UoFIVQCFpC2r4eqIIt8aMID2RjmgieykD98-UQOzajG5EXgZoW11iNNljZ2U1nZJCbBWKTznrwARWLKsQDpaGq_lCV6P4R3rJQro8m25SathY9arn8FRAf-AeqHc4BjOk6KT3vjhTa22F-n6oCz0HRCpeI8WaRESNphbLT8j6b3vGGcpKrBSiJpwC46CJMEYoNhqu6hqd6nUVxcEVz8Rey_pW5DrnqGJ_eTj1YGkIkcJBRp7M7kI21L7jut30aumK7oHWeaY0lw-nvC6tLfEwqt1FCji6X9tJjyjbRfHGVd_OAySRhokAjSyA22tmLhnms0PRYLk5PDXzickWmFUbGWuaQug1Bs2uHVWYmVbelfytuDz3IGZudeYXqWKuZ4NMIW4PqDgwceTuVIxgNO5Ddo4leK1yA8ZQf0PkjS8ipQrjrTDD7O8tL2gQMOVlsFRuH1La8NFXHE-CSgpHU--9UYzzmpeGKtfrP5jeFmLZeKx2X2vsDqIMvNdjZb47nYsULYJenQyZcZYph88CFBP8cHB3lOqTuwu3aYOfa52M92dTY887c0wMHC=s0-l75-ft-l75-ft",
            },
        },
        ])
    }, [])
 
  const onSend = useCallback((messages = []) => {
      let newMessage = messages
     delete newMessage[0].createdAt
     console.log(newMessage)
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessage))
  }, [])
 
   return (
    <View>
        <TouchableOpacity style={{ width: 300, marginTop: 50, backgroundColor: "white", display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "flex-start", alignItems: "flex-start", justifyContent: "flex-start"}} onPress={() => props.changeScreen({screen: "Home"})}>
            <Text style={{fontSize: 40, display: "flex", flexDirection: "column", flexWrap: "wrap", alignSelf: "flex-start", alignContent: "flex-start", justifyContent: "flex-start"}}>&#8701;</Text>
        </TouchableOpacity>
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{ _id: 1}}
            // renderInputToolbar={InputToolbar}
            renderAvatar={renderAvatar}
            renderBubble={renderBubble}
            renderSystemMessage={renderSystemMessage}
            renderMessage={renderMessage}
            renderMessageText={renderMessageText}
            // renderMessageImage
            renderCustomView={renderCustomView}
        />
    </View>
   );
}
export default Dialogue;

const styles = StyleSheet.create({
   });