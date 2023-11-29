import { Box, Flex, Text, useColorModeValue, Stack } from "@chakra-ui/react";
import { images } from "../../theme";

const Heading = () => {
  return (
    <Stack spacing={4} width={"100%"}>
      <Flex direction="row" align="center">
        <img src={images.rectangle} alt="Logo" />
        <Text
          pl={4}
          fontFamily={"Inter"}
          lineHeight={"120%"}
          fontSize={{ base: "16px", md: "24px" }}
          width={{ base: "auto", md: "400px" }}
          color={"white"}
        >
          Contact us{" "}
        </Text>
      </Flex>
      <Text
        color={"white"}
        fontSize={{ base: "24px", md: "40px" }}
        fontWeight={700}
        fontFamily={"Inter"}
        lineHeight={"140%"}
        mt={4}
        width={{ base: "auto", md: "56%" }}
        >
        Have a project in mind? Let's make it happen
      </Text>
    </Stack>
  );
};

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("brand.900", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      p={{ base: 4, md: 20 }}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        color="white"
      >
        <Box p={4}>
          <Heading />
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          mt={{ base: 8, md: 0 }}
        >
          <Stack
            direction="column"
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
          >
            <Box as="a" href={"#"} whiteSpace="nowrap">
              22 Street Name, Suburb, 8000,
            </Box>
            <Box as="a" href={"#"} whiteSpace="nowrap">
              Cape Town, South Africa
            </Box>
            <Box as="a" href={"#"} whiteSpace="nowrap">
              +27 21 431 0001
            </Box>
            <Box as="a" href={"#"} whiteSpace="nowrap">
              enquirie@website.co.za
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={"space-between"}
        p={4}
        color={"white"}
        mt={10}
        textAlign={{ base: "center", md: "left" }}
      >
        <Flex direction={"column"}  p={4}>
          <Box as="a" href={"#"}>
            Terms of service
          </Box>
          <Box as="a" href={"#"}>
            Privacy policy
          </Box>
          <Box as="a" href={"#"}>
            Impressum
          </Box>
        </Flex>
        <Flex direction={"column"} p={4}>
          <Box as="a" href={"#"}>
            Facebook
          </Box>
          <Box as="a" href={"#"}>
            Instagram
          </Box>
          <Box as="a" href={"#"}>
            Twitter
          </Box>
        </Flex>
        <Flex direction={"column"} p={4}>
          <Box as="a" href={"#"}>
            Github
          </Box>
          <Box as="a" href={"#"}>
            Linkedin
          </Box>
          <Box as="a" href={"#"}>
            Teams
          </Box>
        </Flex>
        <Flex direction={"column"} p={4}>
          <Box as="a" href={"#"}>
            Youtube
          </Box>
          <Box as="a" href={"#"}>
            Behance
          </Box>
          <Box as="a" href={"#"}>
            Dribbble
          </Box>
        </Flex>
        <Flex direction={"column"} p={4}>
          <Box as="a" href={"#"}>
            Explore open jobs
          </Box>
          <Box as="a" href={"#"}>
            ©2000—2023 Company Name
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
