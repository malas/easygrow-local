FROM hypriot/rpi-node:argon

# grab tini for signal processing and zombie killing
ENV TINI_VERSION 0.9.0
RUN npm install -g mongo-express

EXPOSE 8081

WORKDIR /node_modules/mongo-express

RUN cp config.default.js config.js

CMD ["node", "app.js"]
