FROM node:10.2.1-slim
LABEL author="Daniel Con"

# Copy Files
WORKDIR /var/www/blog-service
COPY . ./

# Install Packages
RUN npm install pm2 -g && npm i

# Start Service
CMD ["pm2-runtime", "pm2.config.json"]
