# Use a lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose the app port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
