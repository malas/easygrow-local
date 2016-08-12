FROM hypriot/rpi-alpine-scratch

RUN apk update && \
apk upgrade && \
apk add bash && \
apt-get install mongodb-server \
rm -rf /var/cache/apk/*

EXPOSE 27017

# Set usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]
