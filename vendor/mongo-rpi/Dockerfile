FROM resin/rpi-raspbian:jessie

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    mongodb-server

# Create the MongoDB data directory
RUN mkdir -p /data/db

EXPOSE 27017

# Set usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]
