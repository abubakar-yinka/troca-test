import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import ChatItem from "../ChatItem";

const ChatHistory = () => {
  return (
    <StyledScrollView>
      <ChatItem isSender={false} />
      <ChatItem isSender={true} />
    </StyledScrollView>
  );
};

export default ChatHistory;

const StyledScrollView = styled.ScrollView`
  padding: 0 25px;
`;
