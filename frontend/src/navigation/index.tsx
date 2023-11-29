import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { images } from "../theme";
import HomePage from "../containers/HomePage";

interface NavItem {
  label: string;
  component?: any;
  path?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Services",
    component: "",
    path: "",
  },
  {
    label: "Industries",
    path: "",
  },
  {
    label: "Cases",
    component: "",
    path: "",
  },
  {
    label: "Contact",
    component: "",
    path: "",
  },
];

const Navbar: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  const DesktopNav: React.FC = () => {
    const linkColor = useColorModeValue("white", "white");
    const linkHoverColor = useColorModeValue("white", "white");

    return (
      <Stack direction={"row"} spacing={4} p={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Flex alignItems="center">
                  <Box
                    as="a"
                    m={2}
                    href={navItem.path ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: linkHoverColor,
                    }}
                  >
                    {navItem.label}
                  </Box>
                </Flex>
              </PopoverTrigger>
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };

  const MobileNav: React.FC = () => {
    return (
      <Stack
        bg={useColorModeValue("white", "white")}
        p={4}
        display={{ md: "none" }}
      >
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

  const MobileNavItem: React.FC<NavItem> = ({ label, path }) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Stack spacing={4} onClick={onToggle}>
        <Box
          py={2}
          as="a"
          href={path ?? "#"}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.900", "gray.900")}
          >
            {label}
          </Text>
        </Box>
      </Stack>
    );
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue("brand.900", "brand.900")}
        color={useColorModeValue("gray.200", "gray.900")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        p={'0px 89px 0px 75px'}

      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Flex
            p={{ base: 4, md: 4 }}
            w="100%"
            direction={{ base: "column-reverse", md: "row" }}
          >
            <Image
              width="100px"
              height="30.769px"
              alignItems="center"
              flexShrink={"0"}
              src={images.logo}
              display="inline-block"
              // alignSelf="center"
              alt="logo"
            />
          </Flex>

          <Flex
            display={{ base: "none", md: "center" }}
            p={{ base: 4, md: 4 }}
            w="100%"
            direction={{ base: "column-reverse", md: "row" }}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex direction={"row"}>
          <Button
            p={{ base: 4, md: 4 }}
            w="100%"
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            borderRadius={"50px"}
            color={"brand.900"}
            bg={"white"}
            href={"#"}
            _hover={{
              bg: "brand.300",
            }}
          >
            Let’s Talk{" "}
          </Button>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <HomePage />
    </Box>
  );
};

export default Navbar;
