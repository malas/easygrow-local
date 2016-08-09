FROM hypriot/rpi-node:argon

# Create app directory
RUN mkdir -p /usr/src/app

# Install WiringPi
COPY ./vendor/wiringPi /usr/src/wiringPi
WORKDIR /usr/src/wiringPi
RUN ./build && gpio -v

WORKDIR /usr/src/app

# Install app dependencies
COPY app/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./app /usr/src/app

CMD ["node","index.js"]
