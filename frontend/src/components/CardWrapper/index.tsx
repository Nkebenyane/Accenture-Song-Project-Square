import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

import { images, theme } from "../../theme";

type CardWrapperProps = {
  cardImage: string;
  title: string;
  body: string;
};

const CardWrapper: React.FC<CardWrapperProps> = ({
  cardImage,
  title,
  body,
}) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Card maxW="sm" boxShadow={"none"}>
      <CardBody>
        <Image
          src={cardImage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          mb={"45px"}
        />
        <Flex direction={"column"}>
          <Heading
            flexShrink={0}
            fontSize={"24px"}
            fontWeight={900}
            lineHeight={"120%"}
            width={"290px"}
            height={"41"}
          >
            {title}
          </Heading>
          <Text mt={10}>{body} </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardWrapper;
