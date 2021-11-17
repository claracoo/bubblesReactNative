import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GiftedChat, MessageText } from 'react-native-gifted-chat';
import {
    renderAvatar,
    renderBubble,
    renderSystemMessage,
    renderMessage,
    renderMessageText,
    renderCustomView,
  } from './SystemMessage';
import SystemMessage from './SystemMessage'
import { Dialogflow_V2 } from 'react-native-dialogflow';

import { dialogflowConfig } from '../env';  
const BOT_USER = {  
  _id: 2,
  name: 'FAQ Bot',
  avatar: 'https://gm1.ggpht.com/XmdWgDgmAnUERhzVhxFHRVIsJyX4Tcv-_C1BMpXZ74LZ1c1uGH3cBZA3gHBI0Lg0xRK9EwbpB_SrQlqW3ONfCfZc24xqKCCHQ5rfjkVcfQM3VJa-Ml9EpnYu7a6wLJg1bmBkUkKDgm0qo9qfKMAwpYz1QB1lsaiLWjUOHQfHYLI3TLCy7UoFIVQCFpC2r4eqIIt8aMID2RjmgieykD98-UQOzajG5EXgZoW11iNNljZ2U1nZJCbBWKTznrwARWLKsQDpaGq_lCV6P4R3rJQro8m25SathY9arn8FRAf-AeqHc4BjOk6KT3vjhTa22F-n6oCz0HRCpeI8WaRESNphbLT8j6b3vGGcpKrBSiJpwC46CJMEYoNhqu6hqd6nUVxcEVz8Rey_pW5DrnqGJ_eTj1YGkIkcJBRp7M7kI21L7jut30aumK7oHWeaY0lw-nvC6tLfEwqt1FCji6X9tJjyjbRfHGVd_OAySRhokAjSyA22tmLhnms0PRYLk5PDXzickWmFUbGWuaQug1Bs2uHVWYmVbelfytuDz3IGZudeYXqWKuZ4NMIW4PqDgwceTuVIxgNO5Ddo4leK1yA8ZQf0PkjS8ipQrjrTDD7O8tL2gQMOVlsFRuH1La8NFXHE-CSgpHU--9UYzzmpeGKtfrP5jeFmLZeKx2X2vsDqIMvNdjZb47nYsULYJenQyZcZYph88CFBP8cHB3lOqTuwu3aYOfa52M92dTY887c0wMHC=s0-l75-ft-l75-ft'
};


const Dialogue = (props) => {
    const [messages, setMessages] = useState([]);
    const [trigger, setTrigger] = useState("Feeling Depleted")
    const [madlib, setMadLib] = useState("Dragon")
    const [triggers, setTriggers] = useState({"Feeling Depleted": "Why are you feeling depleted? What happened?", "My Goals": "Why are you concerned about yout goals? What happened?", "Feeling Ambiguity": "In what way are you feeling that there is ambiguity? What happened?", "My Fears": "Why do you feel fearful? What happened?"})
    const [msgCount, setMsgCount] = useState(2)
    const [presetMsgs, setPresetMsgs] = useState(["ask for feeling", "they say what happened", "ask why for normal answer", "respond normally", "asky why with madlib", "pick which word for madlib", "tell user which madlib picked", "respond with madlib", "ask if they want to do more or save"])
 
    useEffect(() => {
        setMessages([
        {
            _id: 1,
            text: 'Hi, Sam. What is your concern right now?',
            user: BOT_USER
        },
        ])
        Dialogflow_V2.setConfiguration(
            dialogflowConfig.client_email,
            dialogflowConfig.private_key,
            Dialogflow_V2.LANG_ENGLISH_US,
            dialogflowConfig.project_id
          );
    }, [])

    // function getNextMessage(){
    //     let textToBeSent = ""
    //     if (msgCount == 2) textToBeSent = `${triggers[trigger]}`
    //     if (msgCount == 4) textToBeSent = "Why do you think this happened?"
    //     if (msgCount == 6) textToBeSent = "Okay, let’s have fun with this! Choose a word from this list and use it to come up with a new reason for why this situation happened. The crazier the better!"
    //     if (msgCount == 8) textToBeSent = `Ok great! Think of a reason your situation by using “${madlib}” in your sentence.`
    //     if (msgCount == 10) textToBeSent = `Great! Do you want to keep thinking of new reasons or save this story?`
    //     let nextMsg = {
    //         _id: Date.now(),
    //         text: `${textToBeSent}`,
    //         user: BOT_USER,
    //     }
    //     console.log(nextMsg.text)
    //     return nextMsg
    // }
 
  const onSend = useCallback((messages = []) => {
        console.log("idx", msgCount)
        let newMessage = messages
        delete newMessage[0].createdAt
        let newAndNext = [newMessage[0]]
        setMessages(previousMessages => GiftedChat.append(previousMessages, newAndNext))
        Dialogflow_V2.requestQuery(
            messages[0].text,
            result => handleGoogleResponse(result),
            error => console.log(error)
          );
  }, [])

  const handleGoogleResponse = (result) => {  
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    sendBotResponse(text);
}

const sendBotResponse = (text) => {  
    let msg = {
      _id: Date.now(),
      text,
      createdAt: new Date(),
      user: BOT_USER
    };
    console.log(text)
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
  }
 
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