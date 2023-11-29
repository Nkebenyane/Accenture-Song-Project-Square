import { Card, CardBody, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

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
