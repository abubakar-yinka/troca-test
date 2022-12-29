import { View, Text, TextInput } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import styled from "styled-components/native";

const ChatInput = () => {
  return (
    <StyledContainer>
      <StyledInput placeholder="Type a message..." />
      <FontAwesome
        name="send"
        size={24}
        color="black"
        style={{ padding: 16 }}
      />
    </StyledContainer>
  );
};

export default ChatInput;

const StyledContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 13px;
  align-items: center;
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 25px;
`;

const StyledInput = styled.TextInput`
  width: 85%;
  padding: 23px 24px;
  background-color: #f8f8f8;
  border-radius: 8px;
`;
