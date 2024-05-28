## Setting Up State Bucket
1. **Google Project Services Enablement**:
   - **Storage API**: Enables the Google Cloud Storage API for the project.
   - **KMS API**: Enables the Google Cloud Key Management Service (KMS) API for the project.

2. **KMS Key Management**:
   - **Key Ring Creation**: Creates a KMS key ring with a specified name and location.
   - **Crypto Key Creation**: Generates a cryptographic key within the key ring for encryption and decryption, defining rotation period and purpose.
   - **Crypto Key Version**: Creates a version of the cryptographic key.

3. **IAM Policy Management**:
   - **Key Admin Grant**: Assigns the role of KMS admin to a specified user (`example@mail.com`).
   - **KMS Key Ring IAM Policy**: Applies the KMS admin policy to the key ring.
   - **KMS Crypto Key IAM Policy**: Applies the KMS admin policy to the cryptographic key.
   - **Project IAM Member**: Grants a service account the role of Crypto Key Encrypter Decrypter for the project.

4. **Google Cloud Storage Setup**:
   - **Bucket Creation**: Establishes a Google Cloud Storage bucket with specific configurations like name, location, storage class, versioning, encryption using the KMS key, access control, and labels.
   - **IAM Policy for Bucket**: Assigns the Storage Admin role to the specified user (`example@mail.com`) for the created storage bucket.

Overall, this script ensures a secure environment for managing cryptographic keys and storage in Google Cloud Platform, with appropriate access controls and permissions granted to designated users and service accounts.

Regarding state management, Terraform utilizes a `.tfstate` file to store state. To deploy a state bucket:

1. Modify the backend configuration in the `init.tf` file, switching from Google Cloud Storage (GCS) to a local backend.
2. Remove the `-backend-config=backend/${ENV}.tfbackend` option from line 6 of the Makefile.
3. Run the command `ENV=egov-devops make plan`. Confirm state migration when prompted.
4. Following these steps, a new state bucket will be created.