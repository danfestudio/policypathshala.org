# Use the official Alpine Linux image as the base image
FROM alpine:latest

# Install the apache2 (Apache HTTP Server) package
RUN apk add --no-cache apache2

# Set the working directory to the web server root
WORKDIR /var/www/localhost/htdocs

# Copy your .html files and /assets directory to the container
COPY *.html .
COPY assets ./assets/

# Expose port 8001
EXPOSE 8001

# Start the Apache HTTP server on port 8001
CMD ["httpd", "-D", "FOREGROUND", "-f", "/etc/apache2/httpd.conf", "-p", "8001"]