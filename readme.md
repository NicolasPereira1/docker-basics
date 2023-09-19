# Training on docker basics

## Dockerfile method
This method is based on the Dockerfile.
A docker image can be build from a Dockerfile by using the following command : 
```
    docker build . -t node-docker
```
And after that we are able to see it in the images list by typing :
```
    docker images -a
```
And lastly run it with :
```
    docker run -dp 127.0.0.1:4000:80 node-docker
```

## Docker-compose method

This method is based on the docker-compose.yml.
With this method you will be able to run several differents docker image at the same time by using a reference file.
You can use the next command to build & run your differents services details in the docker-compose.yml file.
```
    docker-compose up -d
```
The option -d will detach the processus allowing you to keep using the terminal after you enter the command.

The advantage of this method is that you can build multiples 

## Docker ps

Finally you can use the command docker up cf. below, to list you running images (an image run in a container).
```
    docker ps
```
If you add the option -a you will be able to see the history of the container ran & stoped now.


## Debugging

I used ``` docker exec -it docker-basics-my-frontend-1 sh ``` in order to debug the Hostname resolution.