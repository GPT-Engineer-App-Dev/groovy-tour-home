import { Box, Flex, Heading, Text, VStack, Link, Image } from "@chakra-ui/react";
import { FaMusic, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.800" color="white" minH="100vh">
      <Flex as="nav" bg="black" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>BandName</Heading>
        <Flex alignItems="center">
          <Link p={2} href="#tour" leftIcon={<FaCalendarAlt />}>Tour Dates</Link>
          <Link p={2} href="#about" leftIcon={<FaInfoCircle />}>About</Link>
          <Link p={2} href="#media" leftIcon={<FaMusic />}>Media</Link>
        </Flex>
      </Flex>
      <VStack spacing={8} p={8} align="center">
        <Box id="tour" p={8} w="full">
          <Heading as="h2" size="xl">Tour Dates</Heading>
          <Text mt={4}>Check out our upcoming shows!</Text>
          {/* Tour dates list would be dynamically generated here */}
        </Box>
        <Box id="about" p={8} w="full">
          <Heading as="h2" size="xl">About the Band</Heading>
          <Text mt={4}>Learn more about our journey and music.</Text>
          {/* More detailed band information would go here */}
        </Box>
        <Box id="media" p={8} w="full">
          <Heading as="h2" size="xl">Media</Heading>
          <Text mt={4}>Listen to our latest tracks and watch our videos.</Text>
          {/* Media player or links to media would be included here */}
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;