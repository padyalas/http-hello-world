# Use a Node.js base image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the default port (optional for documentation; does not enforce it)
EXPOSE 80

# Use environment variable for the port
CMD [ "node", "index.js" ]
