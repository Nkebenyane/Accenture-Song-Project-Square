import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import { images } from "../../theme";
import { Flex, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import CardWrapper from "../../components/CardWrapper";
import CaseStudiesCard from "../../components/CaseStudiesCard";
import { retrievBrands } from "../../utils/api";
import Footer from "../../components/Footer";

const HomePage: React.FC = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const [filteredAndSortedArray, setFilteredAndSortedArray] = useState([
    { id: "", name: "", logo: "", published: "" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await retrievBrands();

        setFilteredAndSortedArray(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filteredAndSortedArray]);

  console.log(filteredAndSortedArray);

  return (
    <Box>
      <Hero />
      <Flex direction={"column"} p={"100px"}>
        <Flex direction="row">
          <img src={images.rectangle} alt="Logo" />
          <Text
            pl={4}
            fontFamily={"Inter"}
            lineHeight={"120%"}
            fontSize={"24px"}
            width={"400px"}
          >
            What we do
          </Text>
        </Flex>
        <Text
          display={"flex"}
          width={isLargerThan1280 ? "1279px" : ""}
          height={isLargerThan1280 ? "225px" : ""}
          flexDirection={"column"}
          justifyContent={"center"}
          flexShrink={0}
          fontSize={"48px"}
          fontWeight={700}
          fontFamily={"Inter"}
          lineHeight={"140%"}
          mt={4}
        >
          We offer a complete range of bespoke design and development services
          to help you turn your ideas into digital masterpieces
        </Text>
        <Flex
          p={{ base: 4, md: 4 }}
          w="100%"
          direction={{ base: "column-reverse", md: "row" }}
        >
          <CardWrapper
            cardImage={images.webDevIcon}
            title={"Web development"}
            body={
              "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions."
            }
          />
          <CardWrapper
            cardImage={images.UXIcon}
            title={"User experience & design"}
            body={
              "Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business."
            }
          />
          <CardWrapper
            cardImage={images.appDevIcon}
            title={"Mobile app development"}
            body={
              "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients."
            }
          />
          <CardWrapper
            cardImage={images.blackChain}
            title={"Blockchain solutions"}
            body={
              "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals."
            }
          />
        </Flex>
        <Flex direction="row" mt={10}>
          <img src={images.rectangle} alt="Logo" />
          <Text
            pl={4}
            fontFamily={"Inter"}
            lineHeight={"120%"}
            fontSize={"24px"}
            width={"400px"}
          >
            Case studies
          </Text>
        </Flex>
        <Flex
          w="100%"
          direction={{ base: "column-reverse", md: "row" }}
          justifyContent={"center"}
        >
          <CaseStudiesCard
            cardImage={images.olompian}
            title={"The Olympian"}
            body={
              "The only athlete in the world to do her Olympic routine in 2020."
            }
          />
          <CaseStudiesCard
            cardImage={images.jar}
            title={"The Savings Jar"}
            body={"Grow your savings treasure and grow your dragon."}
          />
          <CaseStudiesCard
            cardImage={images.skhokho}
            title={"Skhokho seMali"}
            body={
              "Helping South Africans become #CashCleva with Skhokho and TymeBank."
            }
          />
        </Flex>
        <Flex direction="row" mt={10}>
          <img src={images.rectangle} alt="Logo" />
          <Text
            pl={4}
            fontFamily={"Inter"}
            lineHeight={"120%"}
            fontSize={"24px"}
            width={"400px"}
          >
            You’ll be in good company{" "}
          </Text>
        </Flex>
        <Text
          display={"flex"}
          width={isLargerThan1280 ? "1279px" : ""}
          height={isLargerThan1280 ? "225px" : ""}
          flexDirection={"column"}
          justifyContent={"center"}
          flexShrink={0}
          fontSize={"48px"}
          fontWeight={700}
          fontFamily={"Inter"}
          lineHeight={"140%"}
          mt={2}
        >
          Trusted by leading brands
        </Text>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(5, 1fr)",
          }}
          gap={4}
          justifyContent="center"
          p={4}
        >
          {filteredAndSortedArray.map((item) => (
            <GridItem
              key={item.id}
              flexShrink={0}
              p={5}
              textAlign={{ base: "center", md: "center" }}
            >
              <img
                src={item.logo}
                alt="Logo"
                width={"95.633px"}
                height={"100px"}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
      <Footer />
    </Box>
  );
};

export default HomePage;
