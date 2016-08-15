FROM hypriot/rpi-node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install --save agendash

EXPOSE 3000

CMD ["./node_modules/.bin/agendash --db=mongodb://mongo/agenda"]
