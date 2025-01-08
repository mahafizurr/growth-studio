import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Box,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

function App() {
  return (
    <Box>
      {/* Navigation */}
      <Box as="nav" sx={styles.nav}>
        <Link
          to="home"
          smooth
          duration={500}
          style={styles.link}
          aria-label="Go to Home"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth
          duration={500}
          style={styles.link}
          aria-label="Go to About"
        >
          About
        </Link>
        <Link
          to="services"
          smooth
          duration={500}
          style={styles.link}
          aria-label="Go to Services"
        >
          Services
        </Link>
        <Link
          to="contact"
          smooth
          duration={500}
          style={styles.link}
          aria-label="Go to Contact"
        >
          Contact
        </Link>
      </Box>

      {/* Home Section */}
      <MotionBox
        id="home"
        sx={{ ...styles.section, ...styles.homeSection }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MotionHeading
          as="h1"
          size="2xl"
          mb={4}
          color="white"
          fontWeight="semibold"
          textAlign="center"
          letterSpacing="0.05em"
          lineHeight="1.2"
          whileHover={{ scale: 1.1 }}
        >
          Grow Your Business Online
        </MotionHeading>
        <MotionText
          fontSize="lg"
          textAlign="center"
          px={4}
          py={2}
          bg="rgba(255, 255, 255, 0.7)"
          borderRadius="0.5rem"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to our Growth Studio IT! <br />
          We build solutions that elevate your online presence <br />
          and drive business growth.
        </MotionText>

        <MotionButton
          as="a"
          href="#contact"
          size="lg"
          mt={8}
          colorScheme="blue"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Get Started
        </MotionButton>
      </MotionBox>

      {/* About Section */}
      <MotionBox
        id="about"
        sx={{ ...styles.section, ...styles.aboutSection }}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <MotionHeading as="h1" size="2xl" mb={4}>
          About
        </MotionHeading>
        <Text fontSize="lg" textAlign="center">
          We are a passionate team of web developers, designers, and strategists
          committed to delivering cutting-edge digital solutions.
        </Text>
      </MotionBox>

      {/* Services Section */}
      <MotionBox
        id="services"
        sx={{ ...styles.section, ...styles.servicesSection }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Services
        </Heading>
        <UnorderedList styleType="none" padding={0}>
          {services.map((service, index) => (
            <MotionBox
              as="li"
              key={index}
              sx={styles.listItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Text as="h3" fontWeight="bold" mb={2}>
                {service.title}
              </Text>
              <Text>{service.description}</Text>
            </MotionBox>
          ))}
        </UnorderedList>
      </MotionBox>

      {/* Portfolio Section */}
      <MotionBox
        id="portfolio"
        sx={{ ...styles.section, ...styles.portfolioSection }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Portfolio
        </Heading>
        <UnorderedList styleType="none" padding={0}>
          {portfolio.map((project, index) => (
            <MotionBox
              as="li"
              key={index}
              sx={styles.listItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Text as="h3" fontWeight="bold" mb={2}>
                {project.title}
              </Text>
              <Text>{project.description}</Text>
            </MotionBox>
          ))}
        </UnorderedList>
      </MotionBox>

      {/* Teams Section */}
      <MotionBox
        id="teams"
        sx={{ ...styles.section, ...styles.teamsSection }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Teams
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          {teams.map((team, index) => (
            <MotionBox
              key={index}
              sx={styles.listItem}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={team.image} alt={team.name} style={styles.teamImage} />
              <Text as="h3" fontWeight="bold" mb={2}>
                {team.name}
              </Text>
              <Text>{team.description}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </MotionBox>

      {/* Contact Section */}
      <MotionBox
        id="contact"
        sx={{ ...styles.section, ...styles.contactSection }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Heading as="h1" size="2xl" mb={4}>
          Contact
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Ready to take your business to the next level? Get in touch with us
          today!
        </Text>
        <MotionButton
          as="a"
          href="mailto:studiogrowth2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={styles.button}
          whileHover={{ scale: 1.1 }}
        >
          Contact Us
        </MotionButton>
      </MotionBox>

      {/* Scroll to Top Button */}
      <MotionButton
        onClick={() => scroll.scrollToTop()}
        position="fixed"
        bottom="20px"
        right="20px"
        bg="black"
        color="white"
        borderRadius="md"
        _hover={{ bg: "gray.700" }}
        whileHover={{ scale: 1.2 }}
      >
        ^
      </MotionButton>

      {/* Footer with Social Media Links */}
      <Box as="footer" sx={styles.footer}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Text fontSize="sm" color="gray.500">
            &copy; {new Date().getFullYear()} Growth Studio. All rights
            reserved.
          </Text>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
            }}
          >
            <a
              href={socialMediaLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} color="white" />
            </a>
            <a
              href={socialMediaLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} color="white" />
            </a>
            <a
              href={socialMediaLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} color="white" />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#282c34",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  section: {
    minHeight: "100vh",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homeSection: {
    "@keyframes bgAnimation": {
      "0%": {
        backgroundImage:
          "url('https://images.pexels.com/photos/8294650/pexels-photo-8294650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      "25%": {
        backgroundImage:
          "url('https://images.pexels.com/photos/10926479/pexels-photo-10926479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      "50%": {
        backgroundImage:
          "url('https://images.pexels.com/photos/10926480/pexels-photo-10926480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      "75%": {
        backgroundImage:
          "url('https://images.pexels.com/photos/10926481/pexels-photo-10926481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      "100%": {
        backgroundImage:
          "url('https://images.pexels.com/photos/10926482/pexels-photo-10926482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
    },
    backgroundImage:
      "url('https://images.pexels.com/photos/8294650/pexels-photo-8294650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    animation: "bgAnimation 30s ease-in-out infinite",
  },
  aboutSection: {
    bg: "linear-gradient(120deg, #f7f7f7, #ececec)",
    color: "black",
  },
  servicesSection: {
    bg: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)",
    color: "white",
  },
  contactSection: {
    bg: "linear-gradient(to top, #37ecba, #72afd3)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width: 768px)": {
      padding: "10px",
    },
  },
  listItem: {
    borderBottom: "1px solid #ccc",
    padding: "20px",
    listStyle: "none",
  },

  portfolioSection: {
    bg: "linear-gradient(to bottom, #333, #555)",
    color: "#fff",
    "@media screen and (max-width: 768px)": {
      bg: "#333",
    },
  },

  teamImage: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    objectFit: "cover",
    marginBottom: "20px",
  },
  footer: {
    padding: "10px",
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
  },
};

const services = [
  { title: "Custom Web Development", description: "Build scalable websites." },
  { title: "UI/UX Design", description: "Enhance user experience." },
  { title: "E-Commerce Solutions", description: "Maximize online sales." },
  { title: "SEO Optimization", description: "Boost search engine visibility." },
  { title: "Maintenance and Support", description: "Keep websites updated." },
];

const portfolio = [
  {
    title: "Chapai Bar Association",
    description: "This is a website for Chapai Nawabganj Bar Association. ",
  },
  {
    title: "Priyo Fruits",
    description: "This is a website for Priyo Fruits.",
  },
  {
    title: "Kinder Garten School",
    description: "This is a website for Kinder Garten School.",
  },
];

const teams = [
  {
    name: "Mahafizur Rahman (Biplob)",
    description: "Software Engineer",
    image: "./biplob.jpg",
  },
  {
    name: "Sanjida Akther Bipa",
    description: "Designer",
    image: "./Sanjida Akther.jpg",
  },
  {
    name: "Asik",
    description: "SEO Specialist",
    image:
      "https://images.pexels.com/photos/30139862/pexels-photo-30139862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Sudipto Paul",
    description: "UI/UX Designer",
    image: "./sudipto.jpg",
  },
];

const contactInfo = {
  email: "studiogrowth2@gmail.com",
  phone: "+880 1906553275",
  address: "1216-mirpur, Dhaka, Bangladesh",
};

const socialMediaLinks = {
  facebook: "https://www.facebook.com/growthstudio2",
  twitter: "https://www.twitter.com",
  instagram: "https://www.instagram.com",
};

export default App;
