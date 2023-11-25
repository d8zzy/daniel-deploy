# Use an official Node.js LTS (Long Term Support) image as the base image
FROM node:lts as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g yarn --force
RUN yarn install

# Copy the entire application code to the working directory
COPY . .

# Build the Angular application
RUN yarn build --prod

# Use a lightweight Nginx image as the final image
FROM nginx:alpine

# Copy the built Angular app f
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
