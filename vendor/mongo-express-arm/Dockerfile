FROM hypriot/rpi-node:argon

RUN npm install -g mongo-express

EXPOSE 8081

WORKDIR /node_modules/mongo-express

RUN cp config.default.js config.js

CMD ["node", "app.js"]
