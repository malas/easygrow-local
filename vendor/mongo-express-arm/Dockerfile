FROM hypriot/rpi-node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install mongo-express

EXPOSE 8081

RUN cd /node_modules/mongo-express && cp config.default.js config.js

CMD ["node", "/usr/src/app/node_modules/mongo-express/app.js"]
