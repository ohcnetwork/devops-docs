# ECS

Care Develop instance [care.ohc.network](https://care.ohc.network) relies on ECS deployed backend. 

- [care-backend](https://github.com/coronasafe/care) : The deployment pulls the [care backend image](https://ghcr.io/coronasafe/care:latest) from the container registry and initialize the deployment by running the [start-ecs.sh](https://github.com/coronasafe/care/blob/develop/scripts/start-ecs.sh) script.
- [fidelius-svc](https://hub.docker.com/layers/khavinshankar/fidelius/amd64/images/sha256-49c0ac47c2ed12ac6580a97d69a6b415299479914f723e89eb3353c97395f6e9) : Fidilius is used for ABDM data encryption and decryption using ECDH Curve25519 
- care-celery : care-celery service pulls the [care backend image](https://ghcr.io/coronasafe/care:latest) from the container registry and initialize the Celery-worker by [celery_worker-ecs.sh](https://github.com/coronasafe/care/blob/develop/scripts/celery_worker-ecs.sh) script,and Celery beat by [celery_beat-ecs.sh](https://github.com/coronasafe/care/blob/develop/scripts/celery_beat-ecs.sh)
- [redis-stack](https://hub.docker.com/layers/redis/redis-stack-server/6.2.6-v10/images/sha256:00a794c8382bfa59358decd8d37ea824e121f0f5c5764b1428c4a14309521160) : redis-stack service pulls [redis/redis-stack-server](https://hub.docker.com/layers/redis/redis-stack-server/6.2.6-v10/images/sha256:00a794c8382bfa59358decd8d37ea824e121f0f5c5764b1428c4a14309521160) and sets up redis for cache storing. 
  
The above listed services are running as ECS service to facilitate care devolop deployment. 