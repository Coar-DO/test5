# Use an official Nginx runtime as a parent image
FROM nginx:latest

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Make port 80 available to the world outside this container
EXPOSE 80

# Run nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
