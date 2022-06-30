## Starting

In the root directory, using the terminal:

1. Run `npm install` to install dependencies.
2. Run `npm run startServer` to start the web sockets server.
3. Open a new terminal and run `npm run startNodeB` to start the other node.
4. Open a new terminal and run `npm run startClient` to start the client.
5. When prompted, type in the absolute filepath for your stl file.

## System Design

A simple diagram is shown here to characterize the flow:

![image](https://user-images.githubusercontent.com/72168962/176591722-eb05922b-4a80-4757-af4e-a6830aedb4ca.png)

## Time Breakdown
- 5 mins system design
- 1.5 hrs selecting APIs and reading over documentation
- 0.75 hrs setting up nodes and ensuring propper communication
- 0.75 hrs sending stl file from node A to node B
- 1 hr extracting information received from B to send to socket server
- 0.5 hrs saving output file back on node A
- 0.5 hrs adding command prompt functionality

### total 5 hrs
