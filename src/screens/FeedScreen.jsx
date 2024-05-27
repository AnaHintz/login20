import {
  Avatar,
  Button,
  Card,
  Text,
  Modal, Portal, PaperProvider,} from "react-native-paper";
import * as React from "react";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const Feed = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Card>
        <Card.Title title="Card Title" left={LeftContent} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Actions>
          <Button style={{ marginTop: 30 }} onPress={showModal}>
            Ver mais
          </Button>
        </Card.Actions>
      </Card>
    </PaperProvider>
  );
};

export default Feed;