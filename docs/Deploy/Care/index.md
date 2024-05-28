# Deploy Care 

## Overview 🗺️

Terraform provides a declarative approach to deploying Care on Google Cloud Platform (GCP) using various providers. This guide outlines the steps to initiate and manage the deployment process. 📋

**Source:** [CodeCommit](https://ap-south-1.console.aws.amazon.com/codesuite/codecommit/repositories/terraform-gcp/browse/refs/heads/master?region=ap-south-1) 🔗

The repository contains Terraform scripts that utilize a GCS cloud storage bucket as a backend to deploy Care on GCP. 💻

## Deployment Process 🚧

### 1. Planning 🤔

To plan the deployment, run the following command:

```bash
ENV=egov-devops make plan
```

### 2. Execution 🚀

To deploy, execute the following command:

```bash
ENV=egov-devops make deploy
```

## Deployment Steps 📝

1. **Enable Cloud Resource Manager API** 🔑:
   - Enable the [Cloud Resource Manager API](https://console.cloud.google.com/marketplace/product/google/cloudresourcemanager.googleapis.com?q=search&referrer=search&project=e-govt-foundation) from the Google Cloud Console.
   - Create a service account key and store it in the project root directory.

2. **Setup State Bucket** 🧱:
   - Run the [state bucket](./GCP/state%20bucket) script to set up the state bucket.

3. **Enable Required APIs** 🔓:
   - Run [gcp-apis](./GCP/gcp-apis) script to enable the necessary APIs for deploying Care.

4. **Network Infrastructure Setup** 🌐:
   - Use [VPC](./GCP/VPC) scripts to set up the network infrastructure.

5. **Configure KMS Keys** 🔐:
   - Use [encryption](./GCP/encryption) scripts to configure KMS keys.

6. **Allocate Storage Buckets** 🗄️:
   - Run [Storagebuckets](./GCP/Storagebuckets) script to allocate storage buckets.

7. **Initiate Postgres Database** 🐘:
   - Use [database](./GCP/database) script to initiate the Postgres database.

8. **Create and Configure GKE Clusters** ⚓:
   - Use [K8s](./GCP/K8s) script to create and configure GKE clusters.

9. **Deploy Workloads and Services** 🚢:
   - Utilize [gke-workload](./GCP/gke-workload) script to deploy workloads, services, and other necessary components.

10. **DNS Configuration** 🌐:
    - Add the IP address obtained from the VPC script to the DNS configuration.

## Provider Documentation 📚

1. [hashicorp/google](https://registry.terraform.io/providers/hashicorp/google/latest/docs): Manages lifecycle of GCP resources including Compute Engine, Cloud Storage, Cloud SQL, GKE, BigQuery, and more. 🌐
2. [hashicorp/helm](https://registry.terraform.io/providers/hashicorp/helm/latest): Manages installed Charts in Kubernetes cluster similar to Helm. ⚓
3. [hashicorp/kubernetes](https://registry.terraform.io/providers/hashicorp/kubernetes/latest): Manages Kubernetes resources such as Deployments, Services, Custom Resources (CRs and CRDs), Policies, and Quotas. 🐳

This Terraform deployment guide facilitates the deployment of Care on GCP, providing a structured and automated approach to managing cloud resources. 