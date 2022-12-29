import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreenNavigationProp } from "app/routes/types";
import Avatar from "../../../../assets/avatar.png";
import VideoIcon from "../../../../assets/video.png";
import CallIcon from "../../../../assets/call.png";

interface Props {
  navigation: HomeScreenNavigationProp;
}

const ChatHeader: React.FC<Props> = ({ navigation }) => {
  return (
    <StyledContainer>
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <StyledImage source={Avatar} style={{ marginLeft: 30 }} />
      <UserDetails>
        <Text>Bob</Text>
        <Text>Today at 10:30am</Text>
      </UserDetails>
      <LastView>
        <StyledImage source={VideoIcon} />
        <StyledImage source={CallIcon} />
      </LastView>
    </StyledContainer>
  );
};

export default ChatHeader;

const StyledContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 10px 24px;
  align-items: center;
  justify-content: space-evenly;
  max-height: 60px;
  background-color: #e9e000;
  width: 100%;
`;

const UserDetails = styled.View`
  flex: 1;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
  width: 60px;
  margin-left: 15px;
`;

const StyledImage = styled.Image`
  justify-self: center;
`;

const LastView = styled.View`
  flex-direction: row;
  width: 70px;
  justify-content: space-between;
`;
