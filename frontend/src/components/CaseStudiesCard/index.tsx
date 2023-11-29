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

type CaseStudiesCardProps = {
  cardImage: string;
  title: string;
  body: string;
};

const CaseStudiesCard: React.FC<CaseStudiesCardProps> = ({
  cardImage,
  title,
  body,
}) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  return (
    <Card maxW="sm" boxShadow={"none"} p={6}>
      <CardBody
        bgImage={cardImage}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Flex direction={"column"} mt={"200px"}>
          <Heading
            flexShrink={0}
            fontWeight={900}
            lineHeight={"120%"}
            width={"290px"}
            height={"41"}
            color={"white"}
          >
            {title}
          </Heading>
          <Text color={"white"} mt={10}>
            {body}{" "}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CaseStudiesCard;
