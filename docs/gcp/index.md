# GCP Resources Overview

## Kubernetes Clusters

- **care-gke-staging**:
  - [care-staging.ohc.network](https://care-staging.ohc.network)
  - [care-staging-api.ohc.network](https://care-staging-api.ohc.network)
  - [care-staging-dashboard.ohc.network](https://care-staging-dashboard.ohc.network)
  - [care-staging-data.ohc.network](https://care-staging-data.ohc.network)

## Storage Buckets

- **10bedicu-smarticu**: Stores video feed for [care_ocr](https://github.com/coronasafe/care_ocr).Currently all the patients Electronic Health Record(EHR) are manually written and hence are prone to errors. This manual workflow also gives nurses trouble of making an extra round for recording the data.With the help of camera installed on smart ICU we can capture the image of 5 Para Monitor at predefined intervals and extract data from this image, making whole process fully automatic and this data gets updated in care module as a part of patient's EHR. 
- **care-staging-facility**: Stores facility images of [care-staging.ohc.network](https://care-staging.ohc.network). 
- **care-staging-patient-data**: Stores patient data from [care-staging.ohc.network](https://care-staging.ohc.network).

## VM Instances

- **middleware-jump-server**: VM instance used to access middleware instances via SSH. Stores the [Ansible playbooks](https://github.com/10bedicu/middleware-ansible) for monitoring and managing middleware.

## SQL Instances

- **care-db**: Postgresql 15 Enterprise edition DB instance that stores Care data.
- **metabase-db**: Postgresql 15 Enterprise Edition DB instance that stores Metabase data.

## VPC

- **care-vpc**: Used for care-staging Deployment.
  - `servicenetworking-googleapis-com` is used by database-instances and is set up along with VPC.
  - `pip-care` private IP is reserved for assigning to Kubernetes cluster.
- **tenbedicu-vpc**: Used for Middleware Jumpserver.:

## Cloud Build
**[Cloud Build](https://cloud.google.com/build)** is the serverless CI/CD platform by Google.  Care staging environment is build and deployed using the cloud build CI/CD service. The buid can be triggered with web hooks.