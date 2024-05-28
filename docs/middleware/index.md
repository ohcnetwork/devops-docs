# Middleware Management Overview

The middleware instances are connected to the care instance using [Cloudflare Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/create-remote-tunnel/) for secure and reliable connections.

The middleware management for teleicu-middlewares connected to the care instance involves several tools and configurations:

1. **[Middleware Data YAML Files](Middleware%20data%20yaml%20files)**
   - Contains YAML files with middleware data configurations.

2. **[teleicu-config](https://github.com/10bedicu/teleicu-config)**
   - Configuration files related to teleicu middleware management.

3. **[Ansible script for adding ssh-keys](./ansible%20script%20for%20adding%20keys)**
   - Ansible script for adding authentication using a new ssh-key.

4. **[Middleware Jumpserver](./Middleware%20Jumpserver)**
   - Middleware jump server, a VM instance used to access middleware instances via SSH. Stores Ansible playbooks for monitoring and managing middleware.
