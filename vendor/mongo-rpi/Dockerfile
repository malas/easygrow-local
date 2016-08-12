FROM resin/rpi-raspbian:jessie

# Installation:
RUN apt-get update && apt-get upgrade && apt-get install mongodb-server

# Create the MongoDB data directory
RUN mkdir -p /data/db

EXPOSE 27017

# Set usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]
