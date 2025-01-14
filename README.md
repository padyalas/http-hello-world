##### Login to GHCR
echo "[PAT]" | docker login ghcr.io -u [username] --password-stdin

##### Build the Docker image
docker build -t http-hello-world .

##### Tag the Docker image
docker tag http-hello-world:latest ghcr.io/padyalas/http-hello-world:latest

##### Push the Docker image
docker push ghcr.io/padyalas/http-hello-world:latest
