import React, { useState } from "react";
import { Box, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, Text, useToast } from "@chakra-ui/react";

const Index = () => {
  const [appName, setAppName] = useState("");
  const [appDescription, setAppDescription] = useState("");
  const [prompt, setPrompt] = useState("");
  const [generatedApp, setGeneratedApp] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically make an API call to your backend service
    // to generate the app based on the provided prompt and app details.
    // For this example, we'll just simulate a response.
    const mockGeneratedApp = `
      // Generated App: ${appName}
      // Description: ${appDescription}
      // Prompt: ${prompt}
      
      function generatedApp() {
        console.log("This is your generated app!");
      }
    `;
    setGeneratedApp(mockGeneratedApp);
    toast({
      title: "App Generated",
      description: "Your app has been successfully generated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxWidth="600px" margin="auto" mt={8} p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>
        LLM Studio App Builder
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl id="appName">
            <FormLabel>App Name</FormLabel>
            <Input type="text" value={appName} onChange={(e) => setAppName(e.target.value)} required />
          </FormControl>
          <FormControl id="appDescription">
            <FormLabel>App Description</FormLabel>
            <Textarea value={appDescription} onChange={(e) => setAppDescription(e.target.value)} required />
          </FormControl>
          <FormControl id="prompt">
            <FormLabel>Prompt</FormLabel>
            <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} required />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Generate App
          </Button>
        </VStack>
      </form>
      {generatedApp && (
        <Box mt={8}>
          <Heading as="h2" size="lg" mb={4}>
            Generated App
          </Heading>
          <Text whiteSpace="pre-wrap">{generatedApp}</Text>
        </Box>
      )}
    </Box>
  );
};

export default Index;
