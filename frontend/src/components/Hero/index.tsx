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
      backgroundImage={`url(https://s3-alpha-sig.figma.com/img/3ec6/8a20/a699946a99481a2e13a2b236b4db254e?Expires=1702252800&Signature=NZLmO0-p7iaqjzT7UaGazoO3i0zAUMdK87lfqQfGHEVwvMRDlHEw4ugfogAUlqoq600nE19yEpUWSt~IxcpTEVb2oUgHyX47z4qq1ClZp6mY8bVuWQfP9URld7UBSrHu19uGHnYwIkfu-AtmVZcBQ-3hXDpKmJLLMJWHYRhO17lcwXHqZk~IdMPG9prvqUi4bHHzg2OWQwZNMxJ8SRo7QvdLBcqTxfFEJg-c3gPGMX1so9o6DXCtgaO43LZmyEc1QePTe~fOMqJ3KNYViwSlf~uTE~II0cU7HDKyDjwbDDJLQoQ1chlo83jnc0CsTuWcOcG9FNGiUlv6WsX-zuTxLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)`}
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
