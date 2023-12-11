import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const Hero: React.FC = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Flex
      w={"full"}
      h={"600px"}
      backgroundImage={`url(https://i.imgur.com/apMzb6x.jpg)`}
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      direction={"row"} p={0} mt={-2}
    >
      <Flex
        w={"full"}
        justify={'left'}
        px={useBreakpointValue({ base: 10, md: 2 })}
        mr={837}
        mt={198}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={"140%"}
              fontSize={"48px"}
              fontFamily={"inherit"}
              fontStyle={"normal"}
              width={isLargerThan1280 ? "510px" : ""}
              height={isLargerThan1280 ? "58px" : ""}
              flexShrink={0}
            >
              Live with Confidence
            </Text>
            <Text
              color={"white"}
              fontWeight={400}
              lineHeight={"150%"}
              fontSize={"20px"}
              fontStyle={"normal"}
              fontFamily={"inherit"}
              width={isLargerThan1280 ? "573.75px" : ""}
              height={"50px"}
              flexShrink={0}
            >
              José Mourinho brings confidence to pan-African Sanlam campaign.
            </Text>
              <Button
                bg={"brand.900"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"8px"}
                borderRadius={"25px"}
                color={"white"}
                _hover={{ bg: "brand.200", color: "gray.300" }}
                mt={8}
              >
                View project{" "}
              </Button>
          </Stack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Hero;
