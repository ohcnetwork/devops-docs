## Setup of networking components GCP for a VPC. 

1. **Network Creation**: It defines and creates a custom network named "care-vpc" with specific attributes such as MTU and routing mode.
2. **Subnetwork Creation**: It establishes a subnetwork named "cluster-snet" within the "asia-south1" region, defining its IP CIDR range and association with the previously created network.
3. **Global Address Allocation**: It allocates a global internal address named "private-services-address" for VPC peering, setting a specific prefix length and linking it to the network.
4. **Service Networking Connection**: It sets up a connection to the Google Service Networking service, facilitating private service access, utilizing the allocated global address.
5. **Compute Address Reservation**: It reserves an external IP address named "pip-care" for future use, designated for the "asia-south1" region and associated network.

Refer coronasafe deploydocs, [Set up the network](https://deploydocs.coronasafe.network/cloud-deployment-overview/google-cloud-deployment/set-up-the-network) section for setting up the network.