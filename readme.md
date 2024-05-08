# raspberryPi setup

- instal standart raspbian OS into SD card
- run for the first time for initial OS configuration
  - connect to your local wifi
  - configure username and password. default _easygrow1_/_easygrow1_
- run the OS for the first time
- configure hostname
  - `sudo raspi-config Default easygrow1`
  - we need an integer at the end of hostname in order to have multiple devices in the same network
- install Docker
  - `curl -fsSL https://get.docker.com | sh`
  - `sudo usermod -aG docker easygrow1`
    - _easygrow1_ in the above command is the username you selected when configuring OS
  - `sudo systemctl enable docker`
    - this command enables docker at system startup
- instal docker compose
  - `wget https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-aarch64 -O docker-compose`
    - visit the https://github.com/docker/compose/releases page to check for the latest version 
  - `chmod +x docker-compose`
  - `sudo mv docker-compose /usr/local/bin/`
  - `docker-compose version`
    - This should output something like `Docker Compose version v2.27.0`

# Setting up easygrow

- download the easygrow source code
  - `git clone https://github.com/malas/easygrow-local.git`
  - `cd easygrow-local`
- build the containers
  - `docker-compose build`

# SSH connect to raspberryPi

With the default settings one would connect via command

`ssh easygrow1@easygrow1.lan`

or alternativelly

`ssh easygrow1@easygrow1.local`

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

## Shutdown rPi
sudo shutdown -h now
