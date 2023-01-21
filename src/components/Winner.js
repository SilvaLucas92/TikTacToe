import React from "react";
import { HStack, Button, Text } from "@chakra-ui/react";

const Winner = ({ winner, handleRestart, tie }) => {
  return (
    <HStack m={2}>
      <Text fontWeight={600} color="red" p={2}>
        {" "}
        {tie ? "It is a tie" : "And the Winner is..."}{" "}
      </Text>
      {winner && (
        <Text font fontSize={25} color="red">
          ¡{winner}!
        </Text>
      )}
      <Button size="sm" variant="ghost" onClick={() => handleRestart()}>
        Play Again!
      </Button>
    </HStack>
  );
};

export default Winner;
