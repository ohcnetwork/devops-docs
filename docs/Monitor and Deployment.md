# Monitoring and Deployment Tools 🔍

## Monitoring 📈

### Uptime Kuma ⏰

[Uptime Kuma](https://github.com/louislam/uptime-kuma) is deployed on an AWS EC2 instance using Docker Compose. It serves as a monitoring solution designed to track the uptime of various services, including Care 💻, Care DNS 🌐, Care Middleware 🛠️, and any other services. Offering user-friendly features, Uptime Kuma stands out as a self-hosted monitoring tool, providing straightforward deployment and intuitive functionality for overseeing service availability. The tool has a dashboard and a status page. Links to the care services can be added to the dashboard to start recording ping and ensure uptime. Care administrators can monitor the status page to ensure smooth deployment by checking the corresponding status pages.

### Prometheus ⚡

Prometheus collects and stores metrics as time series data, recording metrics information with timestamps alongside optional key-value pairs called labels. For care clusters, Prometheus can be set up manually or by enabling the lens metrics from [Lens-Desktop](https://docs.k8slens.dev/cluster/cluster-metrics/).

### Ansible Playbook 

Ansible is an open-source IT automation engine used for provisioning, configuration management, application deployment, orchestration, and other IT processes. It is utilized to manage and monitor TeleICU-Middleware servers. Refer to [Middleware-Jumpserver](./middleware/Middleware%20Jumpserver) for more information.

### New Relic 

[New Relic](https://newrelic.com/platform) provides structured monitoring solutions. Configuration is added to the cluster while deploying care in Kubernetes as an attached volume. The New Relic dashboard displays telemetry data—metrics, events, logs, and traces from the clusters, facilitating the identification and resolution of performance and security issues.

## Deployment 🚀

### coronasafe deploydocs 📚

[Coronasafe deploydocs](https://deploydocs.coronasafe.network/) offers detailed explanations for setting up care on various cloud platforms, including AWS ☁️, GCP ☁️, and Azure ☁️. It also contains information on setting up care-related services such as TeleICU tech and ambulance management systems. The Deploying Operations field describes the requirements for setting up field operations.

### Terraform 🔧

[Terraform](https://www.terraform.io) automates deployment and is used for deploying care to Azure or AWS. Scripts for deploying care and their functionality are explained in the [Deploy](./Deploy/Care/) section. Terraform can also automate other cloud-based solutions using providers available in the [registry](https://registry.terraform.io/).

### Helm ⚓

[Helm](https://helm.sh/) is utilized to set up Ingress-Nginx and Cert-Manager addons to Kubernetes clusters. Known as the package manager for Kubernetes, Helm packages deployments, secrets, config maps, and other Kubernetes resources into a single Helm chart, simplifying deployment.

### Infra-templates 📂

A platform-independent Care Deployment [Template](https://github.com/coronasafe/infra_template/) can be used in a Kubernetes cluster. It provides reusable configurations for deploying Care infrastructure. By cloning the repository and setting up `kubectl` to use the cluster context for care, care can be deployed with `kubectl apply -f`, as specified in the [coronasafe deploy docs](https://deploydocs.coronasafe.network/).

## Lens Desktop 🖥️

Lens is an electron-based Kubernetes IDE that will help us manage and monitor applications running on Kubernetes Clusters. It can be set to use the kubernetes contexts available in the `~/.kube` directory and or from lens cloud. The built-in lens metrics, which is powered by Prometheus, helps with the monitoring aspect. The Lens IDE helps us easily connect to the nodes, get logs, and restart the nodes.