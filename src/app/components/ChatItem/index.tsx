import { View, Text, Image } from "react-native";
import React from "react";
import Avatar from "../../../../assets/avatar.png";
import styled from "styled-components/native";

const ChatItem = ({ isSender }) => {
  return (
    <StyledChatContainer isSender={isSender}>
      <StyledImage source={Avatar} isSender={isSender} />
      <ChatBox isSender={isSender}>
        <StyledChatText isSender={isSender}>Hi, Good Evening</StyledChatText>
        <StyledDateText isSender={isSender}>03:13pm</StyledDateText>
      </ChatBox>
    </StyledChatContainer>
  );
};

export default ChatItem;

const StyledChatContainer = styled.View<{ isSender?: boolean }>`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  flex-direction: ${props => (props.isSender ? "row-reverse" : "row")};
  margin-top: 26px;
`;

const ChatBox = styled.View<{ isSender?: boolean }>`
  flex: 1;
  gap: 10px;
  padding: 16px 24px;
  background-color: ${props => (props.isSender ? "#121212" : "#efefef")};
  border-radius: 16px;
  width: 171px;
  height: 83px;
  align-items: flex-end;
`;

const StyledChatText = styled.Text<{ isSender?: boolean }>`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${props => (props.isSender ? "#D9D9D9" : "#121212")};
`;

const StyledDateText = styled.Text<{ isSender?: boolean }>`
  text-align: end;
  font-size: 14px;
  color: ${props => (props.isSender ? "#D9D9D9" : "#121212")};
`;

const StyledImage = styled.Image<{ isSender?: boolean }>`
  margin-right: 10px;
  display: ${props => (props.isSender ? "none" : "block")};
`;
