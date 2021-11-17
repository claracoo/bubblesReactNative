/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Bubble, SystemMessage, Message, MessageText } from 'react-native-gifted-chat';

export const renderAvatar = (props) => (
  <Avatar
    {...props}
    containerStyle={{ left: {  }, right: {} }}
    imageStyle={{ left: { }, right: {}}}
  />
);

export const renderBubble = (props) => (
  <Bubble
    {...props}
    // renderTime={() => <Text>Time</Text>}
    // renderTicks={() => <Text>Ticks</Text>}
    containerStyle={{
      left: {},
      right: {},
    }}
    wrapperStyle={{
      left: { borderColor: "#DBDBDB", borderWidth: 1, backgroundColor: "white", width: 200,  },
      right: {},
    }}
    bottomContainerStyle={{
      left: { },
      right: {},
    }}
    tickStyle={{}}
    usernameStyle={{  }}
    containerToNextStyle={{
      left: { },
      right: {},
    }}
    containerToPreviousStyle={{
      left: {  },
      right: {},
    }}
  />
);

export const renderSystemMessage = (props) => (
  <SystemMessage
    {...props}
    containerStyle={{ left: {} }}
    wrapperStyle={{  }}
    textStyle={{left:{}, right: {fontSize: 8}}}
  />
);

export const renderMessage = (props) => (
  <Message
    {...props}
    // renderDay={() => <Text>Date</Text>}
    containerStyle={{
      left: { display: "flex", flexDirection: "row", alignItems: "flex-start", flexWrap: "wrap"},
      right: {  },
    }}
  />
);

export const renderMessageText = (props) => (
  <MessageText
    {...props}
    containerStyle={{
      left: { },
      right: { backgroundColor: "#DCEEEA", borderColor: "#DBDBDB", borderWidth: 1, borderRadius: 14 },
    }}
    textStyle={{
      left: { },
      right: { color: "black" },
    }}
    linkStyle={{
      left: {  },
      right: {  },
    }}
    customTextStyle={{ }}
  />
);

export const renderCustomView = ({ user }) => (
  <View style={{ }}>
    {/* <Text>
      Current user:
      {user.name}
    </Text>
    <Text>From CustomView</Text> */}
  </View>
);

