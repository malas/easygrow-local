FROM resin/rpi-raspbian:jessie

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    mongodb-org=3.2.8 mongodb-org-server=3.2.8 mongodb-org-shell=3.2.8 mongodb-org-mongos=3.2.8 mongodb-org-tools=3.2.8

# Create the MongoDB data directory
RUN mkdir -p /data/db

EXPOSE 27017

# Set usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]
