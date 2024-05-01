# rPi setup

- instal standart raspbian OS into SD card
- run for the first time for initial OS configuration
  - connect to your local wifi
  - configure username and password. default _easygrow1_/_easygrow1_
- run the OS for the first time
- configure hostname
  - sudo raspi-config Default _easygrow1_
  - we need an integer at the end of hostname in order to have multiple devices in the same network
- install Docker
  - curl -fsSL https://get.docker.com | sh
  - sudo usermod -aG docker _easygrow1_
  - _easygrow1_ in the above command is the username you selected when configuring OS

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

## Shutdown rPi
sudo shutdown -h now

## LEGACY:
IP: 192.168.1.154
host_name: black-pearl
user: pirate
pass: hypriot
