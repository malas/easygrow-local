FROM node:lts

# Update npm to latest version
RUN npm install -g npm

# Install WiringPi
RUN apt-get update && apt-get install -y \
    git-core \
    build-essential \
    gcc \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Node module for wiring-pi installs it
# RUN git clone git://git.drogon.net/wiringPi
# RUN cd wiringPi && ./build

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY app/package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY ./app/index.js /usr/src/app/

CMD ["node","index.js"]
