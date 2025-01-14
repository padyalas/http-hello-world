## Publish Docker Image

##### Login to GHCR
echo "[PAT]" | docker login ghcr.io -u [username] --password-stdin

##### Build the Docker Image
docker build -t http-hello-world .

##### Tag the Docker Image
docker tag http-hello-world:latest ghcr.io/padyalas/http-hello-world:latest

##### Push the Docker Image
docker push ghcr.io/padyalas/http-hello-world:latest

## Use Docker Image

##### Pull the Docker Image
docker pull ghcr.io/padyalas/http-hello-world:latest

##### Run the Docker Image
docker run -e PORT=1234 -p 1234:1234 http-hello-world
