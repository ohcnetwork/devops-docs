Certainly! Here's the revised documentation:

## Middleware Instance Configuration Repository

The middleware instance configuration repository, hosted on AWS CodeCommit, contains essential data and scripts for setting up middleware instances. Below is the structure of the repository:

```
middleware-config-repo
├── {tunnelid}.json
├── config.yaml
├── docker-compose.yml
├── install.sh
└── rtsptoweb_config.json
```

- **[CodeCommit Repository](https://ap-south-1.console.aws.amazon.com/codesuite/codecommit/repositories/middleware/browse/refs/heads/master?region=ap-south-1)**: Centralized repository for middleware instance configurations and scripts.

### Files Description:

1. **`{tunnelid}.json`**: 
   - Cloudflare tunnel file containing AccountTag, Tunnel Secret, TunnelID, and other relevant configuration details.

2. **`config.yaml`**: 
   - Configuration file defining the tunnel_id credential file and ingress values required for middleware setup.

3. **`docker-compose.yml`**: 
   - YAML file specifying the Docker Compose configuration, facilitating the installation of necessary components for the middleware instance.

4. **`install.sh`**: 
   - Bash script designed to automate the deployment process of the middleware instance, streamlining setup procedures.

5. **`rtsptoweb_config.json`**: 
   - JSON file responsible for defining UUIDs to cameras and configuring video stream settings, essential for proper functioning of the RTSPtoWeb service.

These files collectively provide the necessary data and scripts for configuring and deploying middleware instances efficiently. They serve as a foundational resource for maintaining and managing middleware infrastructure within the teleicu ecosystem.