# docker-compose commands

* docker-compose up
paleidzia visus container sukonfigintus docker-compose.yml

* docker-compose build 
subuildina is naujo pakeistus container

* docker-compose stop 
sustabdo visus container

* docker-compose rm -f
pasalina visus container

* docker-compose logs -f
seka loguinima visuose paleistuose konteineriuose

= docker komandos =

* docker volume rm $(docker volume ls -qf dangling=true)
pasalina visus volumes

# Standart network parameters
IP: 192.168.1.154
host_name: black-pearl
user: pirate
pass: hypriot
