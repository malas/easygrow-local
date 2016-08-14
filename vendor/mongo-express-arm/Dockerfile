FROM hypriot/rpi-node:argon

RUN npm install mongo-express

EXPOSE 8081

RUN cd /node_modules/mongo-express && cp config.default.js config.js

CMD ["node", "app.js"]
