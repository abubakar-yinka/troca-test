import { Text, SafeAreaView, Dimensions } from "react-native";
// import Container from "app/components/Container";
import ChatHeader from "app/components/ChatHeader";
import { HomeScreenNavigationProp } from "app/routes/types";
import ChatHistory from "app/components/ChatHistory";
import ChatInput from "app/components/ChatInput";

const deviceHeight = Dimensions.get("window").height;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        height: deviceHeight,
      }}
    >
      <ChatHeader navigation={navigation} />
      <ChatHistory />
      <ChatInput />
    </SafeAreaView>
  );
};

export default Home;
