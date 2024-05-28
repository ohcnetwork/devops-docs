## Terraform Kubernetes Infrastructure Setup

### 1. Helm Chart for Ingress
- Utilizes Helm to deploy the NGINX Ingress Controller.
- Configures the load balancer IP address for the Ingress controller.

### 2. ConfigMaps
- Defines three ConfigMaps for specific purposes:
  - `care_production`: Holds configurations for the "care" application in the default namespace.
  - `care_fe_production`: Contains configuration data for the frontend application.
  - `nginx_conf_production`: Stores Nginx configuration settings for the production environment.

### 3. Secrets
- Specifies two Secrets:
  - `metabase-secrets`: Stores environment variables needed by the Metabase application.
  - `care_production`: Contains sensitive data required by the "care" application.

### 4. Deployments
- Creates deployments for various components:
  - `care_django_production`: Deploys the "care" Django application.
  - `care_production_celery_beat`: Sets up the Celery Beat service.
  - `care_production_celery_worker`: Deploys the Celery Worker service.
  - `care_dashboard_production`: Deploys the "care" dashboard.
  - `care_fe_production_deployment`: Deploys the frontend application.
  - `fidelius_deployment`: Deploys the Fidelius application.
  - `metabase_production_deployment`: Deploys the Metabase application.
  - `care_nginx_production`: Deploys the Nginx server.
  - `redis_cache_production`: Deploys the Redis cache.

### 5. Services
- Defines services to expose different components internally:
  - `care_fe_staging_production`
  - `care_django_production`
  - `care_dashboard_production`
  - `fidelius`
  - `metabase`
  - `care_nginx_production`
  - `redis_cache_production`

### 6. Ingress
- Configures an Ingress resource named `care_ingress` to expose services externally.
- Defines TLS settings for secure communication.
- Routes traffic based on hostnames to corresponding services.

### 7. Certificate/Cluster Issuer
- Utilizes the `apply_infra_files` null resource to apply infrastructure files using `kubectl apply`.

This Terraform script orchestrates the deployment of multiple components in a Kubernetes cluster, while configuring networking and security settings for external access. It's a translation of the [Infra Template](https://github.com/coronasafe/infra_template/) into Terraform blocks using the Kubernetes provider.