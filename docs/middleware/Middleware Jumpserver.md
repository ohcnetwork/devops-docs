## Middleware Jumpserver

A middleware Jumpserver has been deployed as a Google Cloud Platform (GCP) compute instance dedicated to monitoring and managing all middleware instances within the infrastructure. The Jumpserver utilizes IAM-based user authentication for secure access control. Additionally, Ansible playbooks are employed to efficiently manage middleware instances in bulk.

### Key Features:

- **GCP Compute Instance**: 
  - Hosts the middleware Jumpserver, providing a centralized platform for monitoring and managing middleware instances.

- **IAM-Based User Authentication**: 
  - Implements Identity and Access Management (IAM) for user authentication, ensuring secure access to the Jumpserver.

- **Ansible Playbooks**: 
  - Utilized for bulk management of middleware instances, enabling automation of configuration tasks and ensuring consistency across the infrastructure.

