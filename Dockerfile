# A quick tutorial from how to set up this
# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# development stage
FROM node:14 as dev-stage

# Create app directory
WORKDIR /svr

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Exposing port 8080 from container
EXPOSE 8080

# Commands to run app
CMD [ "npm", "start" ]