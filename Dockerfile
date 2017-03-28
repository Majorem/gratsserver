FROM node:latest
RUN mkdir -p /export/app
WORKDIR /export/app
COPY main.js /export/app
RUN npm install
COPY . /export/app
EXPOSE 1337
CMD ["npm", "start"]
